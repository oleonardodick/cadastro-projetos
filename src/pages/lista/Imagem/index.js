import React, { useEffect, useState } from "react";
import imagemRepository from '../../../repositories/imagem';
import Template from '../../../components/Template';
import Table from '../../../components/Table';
import {useQuery} from '../../../hooks/useQuery';

function Imagens(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const query = useQuery();
    useEffect(() => {
        imagemRepository.buscaImagemPorProjeto(query.get("projeto"))
          .then((imagens) => {
            setDadosIniciais(imagens);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
          <h1>Imagens do Projeto</h1>
           <Table
              cabecalho={['Nome', 'Caminho', 'Descricao','Editar']}
              elementos={dadosIniciais}
              linkEditar={'../../editar/imagem?imagemId='}
              linkCadastrar={`../../cadastro/imagem?projeto=${query.get("projeto")}`}
           />
        </Template>
      )
}

export default Imagens;