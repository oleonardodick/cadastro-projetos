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
      <Link to="../../lista/materiaprima">
        Matéria Prima
      </Link>
      <Link to="../../iniciarprojeto">
        Iniciar Projeto
      </Link>
      <Link to="../../projetosiniciados">
        Projetos iniciados
      </Link>
      <Link to="../../projetosfinalizados">
        Projetos finalizados
      </Link>
    </nav>
  );
}

export default Menu;
