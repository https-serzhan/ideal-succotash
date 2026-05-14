import type {FC, ReactNode} from 'react';
import styles from "./Button.module.css";
type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonProps = {
    children: ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    variant?: ButtonVariant;
}

const Button: FC<ButtonProps> =
    ({children, onClick, disabled, variant = 'primary'}) => {
    return (
        <button onClick={onClick} className={`${styles.button} ${styles[variant]}`} disabled={disabled}>{children}</button>
    )
}

export default Button;