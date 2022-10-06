import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Radio from "components/Form/Radio";
import Title from "components/Title/Title";
import {React, useState} from "react";
import styles from './Form.module.scss';

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

const Form = ({submitFn}) => {

    const [option, setOption] = useState({
        optionActive: TYPES.twitter
    })

    return (
        <section className={styles.wrapper}>
            <Title>Add new {DESCRIPTIONS[option.optionActive]}</Title>
            <form className={styles.form} onSubmit = {submitFn} >
                <div className={styles.options}>
                    <Radio
                        type={TYPES.twitter}
                        isChecked = {option.optionActive === TYPES.twitter}
                        onChangeFn = {() => setOption({optionActive: TYPES.twitter})}
                    />
                    <Radio
                        type={TYPES.article}
                        isChecked = {option.optionActive === TYPES.article}
                        onChangeFn = {() => setOption({optionActive: TYPES.article})}
                    />
                    <Radio
                        type={TYPES.note}
                        isChecked = {option.optionActive === TYPES.note}
                        onChangeFn = {() => setOption({optionActive: TYPES.note})}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <Input
                        name="name"
                        label = {option.optionActive === TYPES.twitter ? "Name" : "Title"}
                    />

                    {
                        option.optionActive !== TYPES.note ?
                        <Input
                            name="link"
                            label={option.optionActive === TYPES.twitter ? "Twitter link" : "Link"}               
                        /> :
                        null
                    }

                    {
                        option.optionActive === TYPES.twitter ?
                        <Input
                            name="image"
                            label="Image link"                
                        /> :
                        null
                    }
                    
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