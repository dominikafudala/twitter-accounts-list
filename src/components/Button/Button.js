import React from "react";
import styles from './Button.module.scss';

const Button = ({children, href, secondary, ...props}) => {
    const buttonClass = secondary ? styles.secondary : styles.button;

    return (
        <>
        {
        href ? 
        (
        <a href={href}
        className={styles.button}
        target="_blank"
        rel="noreferrer"
        >
            {children}
        </a>
        ) :(
        <button
        className={buttonClass}
        type = "submit"
        {...props}
        >
            {children}
        </button>
        )
        }
    </>
    )
}

export default Button;