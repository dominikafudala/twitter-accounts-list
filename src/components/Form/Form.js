import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Title from "components/Title/Title";
import React from "react";
import styles from './Form.module.scss';

const Form = ({submitFn}) => {

    return (
        <section className={styles.wrapper}>
            <Title>Add new Twitter account</Title>
            <form className={styles.form} onSubmit = {submitFn} >
                <div className={styles.inputWrapper}>
                    <Input
                        name="name"
                        label = "Name"
                    />
                    <Input
                        name="link"
                        label="Twitter link"                
                    />
                    <Input
                        name="image"
                        label="Image link"                
                    />
                    <Input
                        tag="textarea"
                        name="description"
                        label="Description"
                    />
                </div>
                <Button>Submit</Button>
            </form>
        </section>
    )
}

export default Form;