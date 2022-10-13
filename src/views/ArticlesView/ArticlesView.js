import React from "react";
import ListWrapper from "components/List/ListWrapper";
import AppContext from "context";
import { useContext } from "react";


const ArticlesView = () => {
    const context = useContext(AppContext);

    return(
        <div>
            <ListWrapper items = {context.state.article} type = {"article"}/>
        </div>
    )
};


export default ArticlesView;