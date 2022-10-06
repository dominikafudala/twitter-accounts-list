import React from "react";
import PropTypes from 'prop-types';
import styles from "./Input.module.scss";


const Input = ({name, label, maxLength, tag: Tag, ...props}) => {
    return(
        <div className={styles.formItem}>
            <Tag 
                type="text" 
                name = {name}
                id = {name} 
                className = {Tag === "input" ? styles.input : styles.textarea} 
                placeholder = " "
                required = {name === "name" || name === "link"}
                maxLength = {maxLength}
                autoComplete = 'none' // in some browsers setting an invalid value to turn off auto complete
                {...props}
            />
            <label 
                className={styles.label}
                htmlFor = {name}
            >
                {label}
            </label>
        </div>
    )
};


Input.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    tag: PropTypes.string,
};


Input.defaultProps = {
    maxLength: 250,
    tag: "input",
}

export default Input;