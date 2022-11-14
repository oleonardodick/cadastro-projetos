import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import ListaCategorias from './pages/lista/Categorias';
import EditarCategoria from './pages/editar/categoria';
import ListaMateriaPrima from './pages/lista/MateriaPrima';
import CadastroMateriaPrima from './pages/cadastro/MateriaPrima';
import ListaProjeto from './pages/lista/Projetos';
import CadastroProjeto from './pages/cadastro/Projeto';
import EditarProjeto from './pages/editar/Projeto';

function Pagina404() {
  return (
    <div>
      Página 404
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="/lista/categorias" element={<ListaCategorias />} />
      <Route path="/editar/categoria" element={<EditarCategoria />} />
      <Route path="/cadastro/materiaprima" element={<CadastroMateriaPrima />} />
      <Route path="/lista/materiaprima" element={<ListaMateriaPrima />} />
      <Route path="/lista/projetos" element={<ListaProjeto />} />
      <Route path="/cadastro/projeto" element={<CadastroProjeto />} />
      <Route path="/editar/projeto" element={<EditarProjeto />} />
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
);
