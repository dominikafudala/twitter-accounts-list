import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Radio from "components/Form/Radio";
import Title from "components/Title/Title";
import {React, useState} from "react";
import styles from './Form.module.scss';
import AppContext from "context";
import { useContext } from "react";

const TYPES = {
    twitter: 'twitter',
    article: 'article',
    note: 'note'
};

const DESCRIPTIONS = {
    twitter: 'Twitter account',
    article: 'article',
    note: 'note'
}

const Form = () => {

    const [state, setState] = useState({
        type: TYPES.twitter,
        title: "",
        link: "",
        image: "",
        description: "",
    })

    const context = useContext(AppContext);

    const handleInputChange = e => {
        setState(prevState => ({
            ...prevState,            
            [e.target.name]: e.target.value
        }));
    }

    return (
        <section className={styles.wrapper}>
            <Title>Add new {DESCRIPTIONS[state.type]}</Title>
            <form className={styles.form} onSubmit = {context.addItem} >
                <div className={styles.options}>
                    <Radio
                        type={TYPES.twitter}
                        isChecked = {state.type === TYPES.twitter}
                        onChangeFn = {() => setState(prevState => ({...prevState, type: TYPES.twitter}))}
                    />
                    <Radio
                        type={TYPES.article}
                        isChecked = {state.type === TYPES.article}
                        onChangeFn = {() => setState(prevState => ({...prevState, type: TYPES.article}))}
                    />
                    <Radio
                        type={TYPES.note}
                        isChecked = {state.type === TYPES.note}
                        onChangeFn = {() => setState(prevState => ({...prevState, type: TYPES.note}))}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Input
                        name="title"
                        label = {state.type === TYPES.twitter ? "Name" : "Title"}
                        onChange = {handleInputChange}
                        value = {state.title}
                    />

                    {
                        state.type !== TYPES.note ?
                        <Input
                            name="link"
                            label={state.type === TYPES.twitter ? "Twitter link" : "Link"} 
                            onChange = {handleInputChange}   
                            value = {state.link}           
                        /> :
                        null
                    }

                    {
                        state.type === TYPES.twitter ?
                        <Input
                            name="image"
                            label="Image link"
                            onChange = {handleInputChange}  
                            value = {state.image}                
                        /> :
                        null
                    }

                    <Input
                        tag="textarea"
                        name="description"
                        label="Description"
                        onChange = {handleInputChange}
                        value = {state.description}  
                    />
                </div>
                <Button>Submit</Button>
            </form>
        </section>
    )
}

export default Form;