import React, { useState } from 'react';
import Captcha from './utils/Captcha';
import emailjs from 'emailjs-com';
        // service_50guucf
        // public key RfXyLTcIAEQczcB0z
        // template id template_rlrtct8

function toTitleCase(name) {
    return name.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

function ContactPage() {
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);
    const [formError, setFormError] = useState('');
    const [fromName, setFromName] = useState('');
    const [replyTo, setReplyTo] = useState('');
    const [message, setMessage] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationName, setConfirmationName] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isCaptchaValid) {
            setFormError('Try a different value.');
            return;
        }

        setFormError('');
        
        const templateParams = {
            from_name: fromName,
            reply_to: replyTo,
            message: message,
        };

        emailjs.send(
            'service_50guucf',
            'template_rlrtct8',
            templateParams,
            'RfXyLTcIAEQczcB0z'
        )
        .then((result) => {
            console.log('Email sent successfully:', result.text);

            // Store name and message for confirmation display
            setConfirmationName(toTitleCase(fromName));
            setConfirmationMessage(message);
            setShowConfirmation(true);

            // Clear form fields
            setMessage('');
            setFromName('');
            setReplyTo('');

            // Hide confirmation message after 5 seconds
            setTimeout(() => setShowConfirmation(false), 5000);
        })
        .catch((error) => {
            console.error('Email not sent:', error);
        });
    };

    const handleCaptchaValidation = (isValid) => {
        setIsCaptchaValid(isValid);
    };

    return (
        <>
            <h2>Contact the Researchers</h2>
            <article>
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
                                aria-required="true"
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
                                aria-required="true"
                                placeholder="Jane Doe"
                                onChange={(e) => setFromName(e.target.value)} 
                            />
                        </p>

                        <p>
                            <label htmlFor="email">Email address</label>
                            <input 
                                type="email" 
                                id="replyTo" 
                                value={replyTo}
                                aria-required="true"
                                placeholder="jane@doe.com"
                                onChange={(e) => setReplyTo(e.target.value)} 
                            />
                        </p>

                        <p>
                            <Captcha onValidate={handleCaptchaValidation} />
                            {formError && <p style={{ color: 'red' }}>{formError}</p>}
                        </p>

                        <button type="submit">Send Message</button>
                        
                        {showConfirmation && (
                            <div className="confirmation" id="confirmation">
                                <h3>Thank you, {confirmationName}. </h3>
                                <p>Your message has been sent:</p>
                                <p>{confirmationMessage}</p>
                            </div>
                        )}
                    </fieldset>
                </form> 
            </article>
        </>
    );
}

export default ContactPage;
