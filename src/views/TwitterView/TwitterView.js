import React from "react";
import ListWrapper from "components/List/ListWrapper";
import AppContext from "context";
import { useContext } from "react";


const TwitterView = () => {
    const context = useContext(AppContext);

    return(
        <div>
            <ListWrapper items = {context.state.twitter} type = {"twitter"}/>
        </div>
    )
};


export default TwitterView;