import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import projetoRepository from '../../../repositories/projetos'
import {useQuery} from '../../../hooks/useQuery';
import { Link } from "react-router-dom";
import BotoesCorrelatos from "./style";
import { useNavigate } from "react-router-dom";

function EditarProjeto() {
  const query = useQuery();
  const navigate = useNavigate();
  const projetoId = query.get("projetoId");
  const [data, setData] = useState([]);



  useEffect(() => {
      projetoRepository.buscaProjetoPorId(projetoId)
        .then((projetos) => {
            setData(projetos);
            const valoresIniciais = {
                id:projetos.id,
                descricao: projetos.descricao,
                preco: projetos.preco,
                capa: projetos.capa,
                categoriaId: projetos.categoriaId,
              };
            initializeForm(valoresIniciais)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

  const { handleChange, values, initializeForm } = useForm(data);
  return (
    <Template>
      <h1>
        Edição de Projeto
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        projetoRepository.atualizaProjeto(values)
        .then(() => {navigate(`../../lista/projetos?categoria=${values.categoriaId}`)})
      }}
      >
        <FormField
          label="Descricao do Projeto"
          type="text"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />
        
        <FormField
          label="Preço"
          type="number"
          value={values.preco}
          name="preco"
          onChange={handleChange}
        />

        <FormField
          label="Capa do Projeto"
          type="text"
          value={values.capa}
          name="capa"
          onChange={handleChange}
        />
        <BotoesCorrelatos>
            <Button as={Link} className="ButtonLink" 
              to={{
                pathname:'../../../../lista/imagem',
                search:'projeto='+values.id,
              }}
            >
              Imagens
            </Button>
            <Button as={Link} className="ButtonLink" 
              to={{
                pathname:'../../../../lista/video',
                search:'projeto='+values.id,
              }}
            >
              Vídeos
            </Button>
            <Button as={Link} className="ButtonLink" 
              to={{
                pathname:'../../../../lista/anotacao',
                search:'projeto='+values.id,
              }}
            >
              Anotações
            </Button>
            <Button as={Link} className="ButtonLink" 
              to={{
                pathname:'../../../../lista/materialprojeto',
                search:'projeto='+values.id,
              }}
            >
              Materiais Projeto
            </Button>
        </BotoesCorrelatos>

        <Button>
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default EditarProjeto;