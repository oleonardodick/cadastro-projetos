import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        Inicio
      </Link>
      <Link to="../../lista/categorias">
        Categorias
      </Link>
      <Link to="/">
        Matéria Prima
      </Link>
      <Link to="/">
        Iniciar Projeto
      </Link>
      <Link to="/">
        Projetos iniciados
      </Link>
      <Link to="/">
        Projetos finalizados
      </Link>
    </nav>
  );
}

export default Menu;
