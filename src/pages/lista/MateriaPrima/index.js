import React, { useEffect, useState } from "react";
import materiaPrimaRepository from '../../../repositories/materiaPrima';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

function MateriasPrima(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    useEffect(() => {
        materiaPrimaRepository.getAll()
          .then((materiasPrima) => {
            setDadosIniciais(materiasPrima);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
           <Table
              cabecalho={['Nome', 'Descricao','Unidade de Medida']}
              elementos={dadosIniciais}
              hasEdit={true}
              hasDelete={false}
              link="../../cadastro/materiaPrima"
           />
        </Template>
      )
}

export default MateriasPrima;