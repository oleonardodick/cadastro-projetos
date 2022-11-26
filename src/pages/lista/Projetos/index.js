import React, { useEffect, useState } from "react";
import projetoRepository from '../../../repositories/projetos';
import Template from '../../../components/Template';
import Table from '../../../components/Table';
import {useQuery} from '../../../hooks/useQuery';

function Projetos(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const query = useQuery();
    useEffect(() => {
        projetoRepository.buscaProjetoPorCategoria(query.get("categoria"))
          .then((projetos) => {
            setDadosIniciais(projetos);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
          <h1>Projetos</h1>
           <Table
              cabecalho={['Descricao', 'Preço', 'Capa','Editar']}
              elementos={dadosIniciais}
              linkEditar={'../../editar/projeto?projetoId='}
              linkCadastrar={`../../cadastro/projeto?categoria=${query.get("categoria")}`}
           />
        </Template>
      )
}

export default Projetos;