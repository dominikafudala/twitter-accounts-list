import ListWrapper from "components/List/ListWrapper";
import Form from "components/Form/Form";
import React from "react";
import { twitterAccounts } from "data/twitterAccounts";
import './App.module.scss';
import { useState } from "react";

const App = () => {

    const [state, setState] = useState(
        {
            twitterAccounts: [...twitterAccounts],
        }
    );


    const addItem = (e) => {
        e.preventDefault();
        
        const newAccount = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value
        }

        setState(prev => (
            {
                twitterAccounts: [...prev.twitterAccounts, newAccount]
            }
        )
        );

        e.target.reset();
    };


    return (
        <div>
            <ListWrapper twitterAccounts = {state.twitterAccounts} />
            <Form submitFn={addItem}></Form>
        </div>
    )
}

export default App;