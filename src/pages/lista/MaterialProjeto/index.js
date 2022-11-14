import React, { useEffect, useState } from "react";
import materialProjetoRepository from '../../../repositories/materialProjeto';
import Template from '../../../components/Template';
import Table from '../../../components/Table';
import {useQuery} from '../../../hooks/useQuery';

function MateriaisProjeto(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const query = useQuery();
    useEffect(() => {
        materialProjetoRepository.buscaMaterialProjetoPorProjeto(query.get("projeto"))
          .then((materiaisProjeto) => {
            setDadosIniciais(materiaisProjeto);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
           <Table
              cabecalho={['Quantidade','Material','Editar']}
              elementos={dadosIniciais}
              linkEditar={'../../editar/materialProjeto?materialProjetoId='}
              linkCadastrar={`../../cadastro/materialProjeto?projeto=${query.get("projeto")}`}
           />
        </Template>
      )
}

export default MateriaisProjeto;