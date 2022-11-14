import React, { useEffect, useState } from "react";
import anotacaoRepository from '../../../repositories/anotacao';
import Template from '../../../components/Template';
import Table from '../../../components/Table';
import {useQuery} from '../../../hooks/useQuery';

function Anotacoes(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const query = useQuery();
    useEffect(() => {
        anotacaoRepository.buscaAnotacaoPorProjeto(query.get("projeto"))
          .then((anotacoes) => {
            setDadosIniciais(anotacoes);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
           <Table
              cabecalho={['Titulo', 'Texto', 'Data','Projeto','Editar']}
              elementos={dadosIniciais}
              linkEditar={'../../editar/anotacao?anotacaoId='}
              linkCadastrar={`../../cadastro/anotacao?projeto=${query.get("projeto")}`}
           />
        </Template>
      )
}

export default Anotacoes;