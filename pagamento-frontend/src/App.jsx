import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ListaPagamentos from './componentes/ListarPagamento';
import VisualizarPagamento from './componentes/VisualizarPagamento';
import FormularioPagamento from './componentes/FormularioPagamento';

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<ListaPagamentos/>}/>
            <Route path = "/visualizar/:id" element = {<VisualizarPagamento/>}/>
            <Route path = "/incluir" element = {<FormularioPagamento modo = "incluir" />}/>
            <Route path = "/editar/:id" element = {<FormularioPagamento modo = "editar" />}/>

        </Routes>
        </BrowserRouter>
    );
}