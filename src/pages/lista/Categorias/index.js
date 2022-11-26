import React, { useEffect, useState } from "react";
import categoriasRepository from '../../../repositories/categorias';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

function Categorias(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    useEffect(() => {
        categoriasRepository.buscaCategorias()
          .then((categorias) => {
            setDadosIniciais(categorias);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
          <h1>Categorias</h1>
           <Table
              cabecalho={['Nome', 'Cor','Editar']}
              elementos={dadosIniciais}
              linkEditar = {"../../editar/categoria?categoriaId="}
              linkCadastrar="../../cadastro/categoria"
           />
        </Template>
      )
}

export default Categorias;