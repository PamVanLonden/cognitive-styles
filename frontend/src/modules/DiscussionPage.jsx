// Oct 3, 2024 This page isn't working yet. 
// It fetches the list of prompts from the git repo, 
// but won't send a push from the form to the pull request list yet. 
// Token appears to work.
// Alert doesn't display.
// Need an alert for problems. 

// start again by viewing the errors in the inspector 

import React, { useEffect, useState } from 'react';

function DiscussionPage() {
    const [prompts, setPrompts] = useState([]);
    const [newPrompt, setNewPrompt] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [captchaError, setCaptchaError] = useState('');

    const correctCaptchaAnswer = "7";

    useEffect(() => {
        const fetchPrompts = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/PamVanLonden/cognitive-styles/main/frontend/src/modules/data/promptsObject.json');
    
                if (response.ok) {
                    const promptsArray = await response.json(); // Directly parse as JSON
    
                    // Assign dynamic IDs to the prompts
                    const promptsWithIds = promptsArray.map((text, index) => ({ id: Date.now() + index, text }));
                    setPrompts(promptsWithIds); // Update the state with fetched prompts
                } else {
                    console.error('Failed to fetch prompts');
                }
            } catch (error) {
                console.error('Error fetching prompts:', error);
            }
        };        
        fetchPrompts();
    }, []);
    
    
    // Define getMainBranchSHA within the DiscussionPage component
    const getMainBranchSHA = async () => {
        try {
            const response = await fetch('https://api.github.com/repos/PamVanLonden/cognitive-styles/git/refs/heads/main', {
                method: 'GET',
                headers: {
                    'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                const errorDetails = await response.json();
                console.error('Error fetching main branch:', errorDetails);
                throw new Error(`Failed to fetch main branch SHA: ${errorDetails.message}`);
            }
    
            const { object } = await response.json();
            console.log('Main branch SHA:', object.sha); // This will give you the SHA
            return object.sha; // Return the SHA value
        } catch (error) {
            console.error('Error:', error);
            throw error; // Rethrow the error if necessary
        }
    };
    

    const handleAddPrompt = async (event) => {
        event.preventDefault();
    
        if (captchaAnswer !== correctCaptchaAnswer) {
            setCaptchaError('Incorrect CAPTCHA answer. Please try again.');
            return;
        }
    
        if (newPrompt.trim()) {
            const newPromptObj = { id: Date.now(), text: newPrompt };
            setNewPrompt('');
            setCaptchaAnswer('');
            setCaptchaError('');
    
            try {
                const sha = await getMainBranchSHA(); // Get the main branch SHA
                const branchName = `feature/add-prompt-${Date.now()}`;
    
                // Create a new branch
                const createBranchResponse = await fetch(`https://api.github.com/repos/PamVanLonden/cognitive-styles/git/refs`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        ref: `refs/heads/${branchName}`,
                        sha: sha,
                    }),
                });
    
                if (!createBranchResponse.ok) {
                    console.error('Failed to create a new branch');
                    return;
                }
                

                // Fetch the existing file contents
                const response = await fetch('https://api.github.com/repos/PamVanLonden/cognitive-styles/contents/frontend/src/modules/data/promptsObject.js', {
                    method: 'GET',
                    headers: {
                        'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const jsonData = await response.json();
                    const content = JSON.parse(atob(jsonData.content));
                    content.prompts.push(newPromptObj);

                    // Commit updated file
                    const updateResponse = await fetch('https://api.github.com/repos/PamVanLonden/cognitive-styles/contents/frontend/src/modules/data/promptsObject.js', {
                        method: 'PUT',
                        headers: {
                            'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            message: `Add new prompt: ${newPromptObj.text}`,
                            content: btoa(JSON.stringify(content, null, 2)), // Encode the updated content to base64
                            sha: jsonData.sha, // Required to update the file
                            branch: branchName // Specify the branch to commit to
                        }),
                    });

                    if (updateResponse.ok) {
                        // Create a pull request
                        const pullRequestResponse = await fetch('https://api.github.com/repos/PamVanLonden/cognitive-styles/pulls', {
                            method: 'POST',
                            headers: {
                                'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                title: `Add new prompt: ${newPromptObj.text}`,
                                body: 'This is an automated pull request to add a new prompt to the list.',
                                head: branchName, // Use the new branch
                                base: 'main', // Target branch for PR
                            }),
                        });

                        if (pullRequestResponse.ok) {
                            console.log('Pull request created successfully!');
                            alert('Your recommended prompt(s) has been submitted for review.');  

                        } else {
                            console.error('Failed to create pull request');
                        }
                    } else {
                        console.error('Failed to update the file');
                    }
                } else {
                    console.error('Failed to fetch the file');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <h2>Discussion Prompts</h2>
            <article>
                <h3>Questions to ponder</h3>
                <p>Below is a list of typical questions participants can address in discussions about their survey summary:</p>
                <ol id="prompts">
                    {prompts.map((prompt) => (
                        <li key={prompt.id}>{prompt.text}</li>
                    ))}
                </ol>

                <form onSubmit={handleAddPrompt} method="POST">
                    <fieldset>
                        <legend>Recommend a prompt</legend>
                        
                        <label htmlFor="recommendPrompt">To add your unique discussion prompts to this list, send them to the developers using this form.</label>
                        <textarea 
                            name="recommendPrompt" 
                            id="recommendPrompt"
                            minLength={3}
                            maxLength={300}
                            placeholder="300 character limit."
                            value={newPrompt} 
                            onChange={(e) => setNewPrompt(e.target.value)} 
                        />
                        
                         <p>
                            <label htmlFor="captcha">What is 2 + 5?</label>
                            <input
                                type="text"
                                name="captcha"
                                id="captcha"
                                value={captchaAnswer}
                                onChange={(e) => setCaptchaAnswer(e.target.value)}
                                placeholder="Enter the answer"
                            />
                            {captchaError && <p style={{color: 'red'}}>{captchaError}</p>}
                            </p>

                        <button type="submit">Send recommendation</button>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default DiscussionPage;
