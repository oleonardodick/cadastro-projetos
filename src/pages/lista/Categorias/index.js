import React, { useEffect, useState } from "react";
import categoriasRepository from '../../../repositories/categorias';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

function Categorias(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    useEffect(() => {
        categoriasRepository.getAll()
          .then((categorias) => {
            setDadosIniciais(categorias);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
           <Table
              cabecalho={['Nome', 'Cor']}
              elementos={dadosIniciais}
              hasEdit={true}
              hasDelete={false}
           />
        </Template>
      )
}

export default Categorias;