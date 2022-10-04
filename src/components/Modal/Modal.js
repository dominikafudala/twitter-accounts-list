import React from "react";
import styles from './Modal.module.scss';
import Form from "components/Form/Form";

const Modal = ({closeModalFn}) => (
    <div className={styles.wrapper}>
        <button className={styles.close} onClick = {closeModalFn}>x</button>
        <Form/>
    </div>
);


export default Modal;