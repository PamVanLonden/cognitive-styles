import React, { useState } from 'react';
import promptsWithIds from './data/promptsObject';

// Convert the data to JSON format
const jsonData = JSON.stringify(promptsWithIds, null, 2);

function DiscussionPage() {
    const [prompts, setPrompts] = useState(promptsWithIds);
    const [newPrompt, setNewPrompt] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [captchaError, setCaptchaError] = useState('');

    const correctCaptchaAnswer = "7";

    const handleAddPrompt = async (event) => {
        event.preventDefault();

        if (captchaAnswer !== correctCaptchaAnswer) {
            setCaptchaError('Incorrect CAPTCHA answer. Please try again.');
            return;
        }

        if (newPrompt.trim()) {
            const newPromptObj = { id: Date.now(), text: newPrompt };
            setPrompts([...prompts, newPromptObj]);
            setNewPrompt('');
            setCaptchaAnswer('');
            setCaptchaError('');

            try {
                // Fetch the existing file contents
                const response = await fetch('https://raw.githubusercontent.com/PamVanLonden/cognitive-styles/main/frontend/src/modules/promptsObject.json', {
                    method: 'GET',
                    headers: {
                        'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const jsonData = await response.json();
                    jsonData.push(newPromptObj); // Add new prompt to the array

                    // Create a pull request instead of committing directly
                    const pullRequestResponse = await fetch('https://api.github.com/repos/PamVanLonden/cognitive-styles/pulls', {
                        method: 'POST',
                        headers: {
                            'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: `Add new prompt: ${newPromptObj.text}`,
                            body: 'This is an automated pull request to add a new prompt to the list.',
                            head: 'main',  
                            base: 'main', // Target branch for PR
                        }),
                    });

                    if (pullRequestResponse.ok) {
                        console.log('Pull request created successfully!');
                    } else {
                        console.error('Failed to create pull request');
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
                        
                        <div>
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
                        </div>

                        <button type="submit">Send recommendation</button>
                    </fieldset>
                </form>
            </article>
        </>
    );
}

export default DiscussionPage;
