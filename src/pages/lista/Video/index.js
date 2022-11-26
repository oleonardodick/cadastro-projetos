import React, { useEffect, useState } from "react";
import videoRepository from '../../../repositories/video';
import Template from '../../../components/Template';
import Table from '../../../components/Table';
import {useQuery} from '../../../hooks/useQuery';

function Videos(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const query = useQuery();
    useEffect(() => {
        videoRepository.buscaVideosPorProjeto(query.get("projeto"))
          .then((videos) => {
            setDadosIniciais(videos);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
          <h1>Vídeos do projeto</h1>
           <Table
              cabecalho={['Nome', 'Link', 'Descrição','Editar']}
              elementos={dadosIniciais}
              linkEditar={'../../editar/video?videoId='}
              linkCadastrar={`../../cadastro/video?projeto=${query.get("projeto")}`}
           />
        </Template>
      )
}

export default Videos;