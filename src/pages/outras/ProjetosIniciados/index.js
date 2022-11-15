import React, { useEffect, useState } from "react";
import ordemProducaoRepository from '../../../repositories/ordemProducao';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

function Projetos(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const outrosLinks =[{
      texto:"Finalizar Projeto",
      link:"../../finalizarprojeto?ordemProducao="
    }]
    useEffect(() => {
        ordemProducaoRepository.buscaOrdemProducaoPorStatus('I')
          .then((projetos) => {
            setDadosIniciais(projetos);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
           <Table
              cabecalho={['Projeto', 'Quantidade']}
              elementos={dadosIniciais}
              outrosLinks={outrosLinks}
           />
        </Template>
      )
}

export default Projetos;