import React, { useEffect, useState } from 'react';

function DiscussionPage() {
    const [prompts, setPrompts] = useState([]);
    const [newPrompt, setNewPrompt] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);


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
                // Create a GitHub issue
                const createIssueResponse = await fetch('https://api.github.com/repos/PamVanLonden/cognitive-styles/issues', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN2}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: `Add Discussion Prompt: ${newPromptObj.text}`,
                        body: 'A user is suggesting a new discussion prompt: ',
                    }),
                });
    
                if (createIssueResponse.ok) {
                    // console.log('GitHub issue created successfully!');
                    // alert('Your recommended prompt(s) has been submitted for review.');
                    setShowConfirmation(true);
                    setNewPrompt('Your recommended prompt(s) has been submitted for review.');  
                    // Optionally, hide the confirmation after a few seconds
                    setTimeout(() => {
                        setShowConfirmation(false);
                    }, 5000); // timeout duration 

                } else {
                    console.error('Failed to create GitHub issue');
                    console.log("Token:", import.meta.env.VITE_GITHUB_TOKEN2);
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

                {/* <form onSubmit={handleAddPrompt} method="POST">
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
                        
                        {showConfirmation && (
                            <div className="confirmation" id="confirmation" style={{ position: 'fixed', top: '0', left: '0', right: '0', background: 'lightgreen', padding: '1em', textAlign: 'center' }}>
                                <h3>Your recommendation has been sent:</h3>
                                <p>{newPrompt}</p>
                            </div>
                        )}
                    </fieldset>
                </form> */}
            </article>
        </>
    );
}

export default DiscussionPage;
