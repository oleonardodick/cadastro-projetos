import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroCategoria from './pages/cadastro/Categoria';
import ListaCategorias from './pages/lista/Categorias';

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
      <Route path="*" element={<Pagina404 />} />
    </Routes>
  </BrowserRouter>,
);
