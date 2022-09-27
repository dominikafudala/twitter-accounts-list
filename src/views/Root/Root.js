import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Root.module.scss';
import TwitterView from 'views/TwitterView/TwitterView';
import NotesView from 'views/NotesView/NotesView';
import ArticlesView from 'views/ArticlesView/ArticlesView';


const Root = () => (
    <BrowserRouter>
    <> 
        <Routes>
            <Route path='/' element = {<TwitterView/>} ></Route>
            <Route path='/notes' element = {<NotesView/>}></Route>
            <Route path='/articles' element = {<ArticlesView/>}></Route>
        </Routes>
    </>
    </BrowserRouter>
);


export default Root;