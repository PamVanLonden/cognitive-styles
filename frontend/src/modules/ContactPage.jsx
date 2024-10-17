import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactPage() {
    const [message, setMessage] = useState('');
    const [fromName, setFromName] = useState('');  
    const [replyTo, setReplyTo] = useState('');   
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [captchaError, setCaptchaError] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const correctCaptchaAnswer = "7";

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check CAPTCHA
        if (captchaAnswer !== correctCaptchaAnswer) {
            setCaptchaError('Incorrect CAPTCHA answer. Please try again.');
            return;
        }

        // Define email template parameters
        const templateParams = {
            from_name: fromName,
            reply_to: replyTo,
            message: message,
        };

        // Send email using emailjs
        emailjs.send(
            'service_50guucf',
            'template_rlrtct8',
            templateParams,
            'RfXyLTcIAEQczcB0z'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);
            setShowConfirmation(true);
            setMessage('');
            setFromName('');
            setReplyTo('');
            setCaptchaAnswer('');
            setCaptchaError('');

            // Hide confirmation message after 5 seconds
            setTimeout(() => setShowConfirmation(false), 5000);
        })
        .catch((error) => {
            console.error('Email not sent:', error);
        });
    };
    
    return (
        <>
            <h2>Contact the Researchers</h2>
            <article>
                <h3> </h3>
                <p></p>
                 
                 <form onSubmit={handleSubmit} method="POST" id="contact">
                    <fieldset>
                        <legend>What would you like to tell us?</legend>
                        
                        <p className="floatLeft">
                            <label htmlFor="message">Message (300 character limit)</label>
                            <textarea 
                                name="message" 
                                id="message"
                                minLength={3}
                                maxLength={300}
                                aria-required
                                autoFocus
                                placeholder="300 character limit."
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                            />
                        </p>

                        <p>
                            <label htmlFor="fromName">First and last name</label>
                            <input 
                                type="text" 
                                id="fromName" 
                                value={fromName}
                                aria-required
                                placeholder="Jane Doe"
                                onChange={(e) => setFromName(e.target.value)} 
                            />
                        </p>

                        <p>
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="replyTo" 
                                id="replyTo" 
                                value={replyTo}
                                aria-required
                                placeholder="jane@doe.com"
                                onChange={(e) => setReplyTo(e.target.value)} 
                            />
                        </p>

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

                        <button type="submit">Send Message</button>
                        
                        {showConfirmation && (
                            <div className="confirmation" id="confirmation" >
                                <h3>Thank you, {fromName}. </h3>
                                <p>Your message has been sent:</p>
                                <p>{message}</p>
                            </div>
                        )}
                    </fieldset>
                </form> 
            </article>
        </>
    );
}

export default ContactPage;
