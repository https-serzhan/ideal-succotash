type PasswordStrengthProps = {
    password: string;
}

function getPasswordStrength(password: string) {
    let score = 0;

    if (password.length > 8) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    return score;
}

export default function PasswordStrength({password}: PasswordStrengthProps) {
    const score = getPasswordStrength(password);
    const width = `${(score / 3) * 100}%`;

    let color = '#e5e7eb';
    let label = 'Too weak';

    if (score === 1) {
        color = '#ef4444';
        label = 'Weak';
    } else if (score === 2) {
        color = '#f59e0b';
        label = 'Medium';
    } else if (score === 3) {
        color = '#22c55e';
        label = 'Strong';
    }

    return (
        <div className="strength-wrapper">
            <div className="strength-bar">
                <div
                    className="strength-fill"
                    style={{width, backgroundColor: color}}
                />
            </div>
            <p className="strength-text">{password ? label : 'Enter a password'}</p>
        </div>
    );
}
