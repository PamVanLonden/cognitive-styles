import React, { useState, useEffect } from 'react';

function Captcha({ onValidate }) {
    const [captchaQuestion, setCaptchaQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [captchaAnswer, setCaptchaAnswer] = useState('');

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        setCaptchaQuestion(`${num1} + ${num2}`);
        setCorrectAnswer(num1 + num2);
    };

    const handleInputChange = (e) => {
        const answer = e.target.value;
        setCaptchaAnswer(answer);

        // Validate CAPTCHA answer
        if (parseInt(answer, 10) === correctAnswer) {
            onValidate(true);
        } else {
            onValidate(false);
        }
    };

    return (
        <div>
            <label htmlFor="captcha">What is {captchaQuestion}?</label>
            <input
                type="text"
                id="captcha"
                value={captchaAnswer}
                onChange={handleInputChange}
                placeholder="Enter the answer"
            />
        </div>
    );
}

export default Captcha;
