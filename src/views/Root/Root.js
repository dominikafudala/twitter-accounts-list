import { React, useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Root.module.scss';
import TwitterView from 'views/TwitterView/TwitterView';
import NotesView from 'views/NotesView/NotesView';
import ArticlesView from 'views/ArticlesView/ArticlesView';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';


const Root = () => {
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


    return(
        <BrowserRouter>
        <> 
            <Header openModalFn = {openModal}/>
            <Routes>
                <Route path='/' element = {<TwitterView/>} ></Route>
                <Route path='/notes' element = {<NotesView/>}></Route>
                <Route path='/articles' element = {<ArticlesView/>}></Route>
            </Routes>
            {modal.isModalOpen && <Modal closeModalFn = {closeModal}/>}
        </>
        </BrowserRouter>
    )
};


export default Root;