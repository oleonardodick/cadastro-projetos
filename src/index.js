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
import EditarMateriaPrima from './pages/editar/MateriaPrima';

import ListaProjeto from './pages/lista/Projetos';
import CadastroProjeto from './pages/cadastro/Projeto';
import EditarProjeto from './pages/editar/Projeto';

import ListaVideo from './pages/lista/Video';
import CadastroVideo from './pages/cadastro/Video';
import EditarVideo from './pages/editar/Video';

import ListaAnotacao from './pages/lista/Anotacao';
import CadastroAnotacao from './pages/cadastro/Anotacao';
import EditarAnotacao from './pages/editar/Anotacao';

import ListaImagem from './pages/lista/Imagem';
import CadastroImagem from './pages/cadastro/Imagem';
import EditarImagem from './pages/editar/Imagem';

import ListaMaterialProjeto from './pages/lista/MaterialProjeto'
import CadastroMaterialProjeto from './pages/cadastro/MaterialProjeto';
import EditarMaterialProjeto from './pages/editar/MaterialProjeto';

import CadastroMovimento from './pages/cadastro/Movimento';

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
      <Route path="/editar/materiaprima" element={<EditarMateriaPrima />} />

      <Route path="/lista/projetos" element={<ListaProjeto />} />
      <Route path="/cadastro/projeto" element={<CadastroProjeto />} />
      <Route path="/editar/projeto" element={<EditarProjeto />} />

      <Route path="/lista/video" element={<ListaVideo />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/editar/video" element={<EditarVideo />} />

      <Route path="/lista/anotacao" element={<ListaAnotacao />} />
      <Route path="/cadastro/anotacao" element={<CadastroAnotacao />} />
      <Route path="/editar/anotacao" element={<EditarAnotacao />} />

      <Route path="/lista/imagem" element={<ListaImagem />} />
      <Route path="/cadastro/imagem" element={<CadastroImagem />} />
      <Route path="/editar/imagem" element={<EditarImagem />} />

      <Route path="/lista/materialprojeto" element={<ListaMaterialProjeto />} />
      <Route path="/cadastro/materialprojeto" element={<CadastroMaterialProjeto />} />
      <Route path="/editar/materialprojeto" element={<EditarMaterialProjeto />} />

      <Route path="/cadastro/movimento" element={<CadastroMovimento />} />

      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
);
