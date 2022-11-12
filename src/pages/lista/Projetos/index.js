import React, { useEffect, useState } from "react";
import projetoRepository from '../../../repositories/projetos';
import Template from '../../../components/Template';
import Table from '../../../components/Table';
import {useQuery} from '../../../hooks/useQuery';

function Projetos(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const query = useQuery();
    // useEffect(() => {
    //     projetoRepository.getProjectByCategory(id)
    //       .then((projetos) => {
    //         setDadosIniciais(projetos);
    //         console.log(id);
    //       })
    //       .catch((err) => {
    //         console.log(err.message);
    //       });
    //   }, []);

      return(
        <Template>
           {/* <Table
              cabecalho={['Nome', 'Descricao', 'Preço']}
              elementos={dadosIniciais}
              hasEdit={true}
              hasDelete={false}
              link="../../cadastro/projeto"
           /> */}
           {console.log(query.get("categoria"))}
        </Template>
      )
}

export default Projetos;