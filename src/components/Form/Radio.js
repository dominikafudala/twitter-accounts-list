import React from "react";
import styles from './Radio.module.scss';


const Radio = ({type, isChecked, onChangeFn}) => (
    <div className={styles.radio}>
        <input 
        className={styles.input}
            id = {type}
            type="radio"
            checked= {isChecked}
            onChange = {onChangeFn}
        />
        <label className = {styles.radioLabel} htmlFor={type}>{type}</label>
    </div>
);


export default Radio;