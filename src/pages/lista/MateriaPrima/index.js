import React, { useEffect, useState } from "react";
import materiaPrimaRepository from '../../../repositories/materiaPrima';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

function MateriasPrima(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const outrosLinks =[{
      texto:"Dar entrada",
      link:"../../cadastro/movimento?material="
    }]
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
          <h1>Matérias Prima</h1>
           <Table
              cabecalho={['Nome', 'Descricao','Unidade de Medida','Saldo']}
              elementos={dadosIniciais}
              linkEditar={"../../editar/materiaprima?materiaPrimaId="}
              linkCadastrar="../../cadastro/materiaPrima"
              outrosLinks={outrosLinks}
           />
        </Template>
      )
}

export default MateriasPrima;