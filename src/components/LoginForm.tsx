import {useState} from 'react';
import type {FormDataType, FormDataErrors} from "../types/form.ts";
import PasswordStrength from "./PasswordStrength.tsx";


export default function LoginForm() {
    const [formData, setFormData] = useState<FormDataType>({email: '', password: ''});
    const [errors, setError] = useState<FormDataErrors>({});
    const [success, setSuccess] = useState<boolean>(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const hasUpperCase = /[A-Z]/.test(formData.password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(formData.password);
        const isLongEnough = formData.password.length >= 8;
        const hasNumber = /(?=.*\d)/.test(formData.password);
        const newErrors: FormDataErrors = {};

        if (formData.email.length === 0) {
            newErrors.email = 'Email is required';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (formData.password.length === 0) {
            newErrors.password = 'Password is required';
        } else if (!isLongEnough) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!hasUpperCase) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!hasSpecialChar) {
            newErrors.password = 'Password must contain at least one special character';
        } else if (!hasNumber) {
            newErrors.password = 'Password must contain a number';
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSuccess(true);
            return;
        }
        setSuccess(false);
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className='form-title'>Fill in the form</h2>
            <label className="form-label">
                Enter your email:
                <input
                    onChange={(e) =>
                        setFormData({...formData, email: e.target.value})}
                    type="email" value={formData.email} className="form-input"/>
            </label>
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label className="form-label">
                Enter your password:
                <input onChange={(e) =>
                    setFormData({...formData, password: e.target.value})}
                       type="password" value={formData.password} className="form-input"/>
            </label>

            <PasswordStrength password={formData.password}/>

            {errors.password && <p className="error-message">{errors.password}</p>}

            <button type='submit' className="submit-button">Submit the form</button>

            {success && <p className="success-message">Form Submitted successfully</p>}
        </form>
    )
}



