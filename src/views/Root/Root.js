import { React, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Root.module.scss';
import AppContext from 'context';
import TwitterView from 'views/TwitterView/TwitterView';
import NotesView from 'views/NotesView/NotesView';
import ArticlesView from 'views/ArticlesView/ArticlesView';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';


const Root = () => {
    const [state, setState] = useState({
        twitterAccounts: [],
        articles: [],
        notes: [],
    });

    const [modal, setModal] = useState(
        {
            isModalOpen: false,
        }
    );

    const openModal = () => setModal(
        {
            isModalOpen: true
        }
    );

    const closeModal = () => setModal(
        {
            isModalOpen: false
        }
    );

    const addItem = (e) => {
        e.preventDefault();
        
        console.log("Działa");
        // const newAccount = {
        //     name: e.target[0].value,
        //     twitterLink: e.target[1].value,
        //     image: e.target[2].value,
        //     description: e.target[3].value
        // }

        // setState(prev => (
        //     {
        //         twitterAccounts: [...prev.twitterAccounts, newAccount]
        //     }
        // )
        // );

        // e.target.reset();
    };

    const context = {addItem};


    return(
        <BrowserRouter>
        <AppContext.Provider value={context}> 
            <Header openModalFn = {openModal}/>
            <Routes>
                <Route path='/' element = {<TwitterView/>} ></Route>
                <Route path='/notes' element = {<NotesView/>}></Route>
                <Route path='/articles' element = {<ArticlesView/>}></Route>
            </Routes>
            {modal.isModalOpen && <Modal closeModalFn = {closeModal}/>}
        </AppContext.Provider>
        </BrowserRouter>
    )
};


export default Root;