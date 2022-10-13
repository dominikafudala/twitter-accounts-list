import React from "react";
import ListWrapper from "components/List/ListWrapper";
import AppContext from "context";
import { useContext } from "react";


const NotesView = () => {
    const context = useContext(AppContext);

    return(
        <div>
            <ListWrapper items = {context.state.note} type = {"note"}/>
        </div>
    )
};


export default NotesView;