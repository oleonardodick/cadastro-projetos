import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import projetoRepository from '../../../repositories/projetos'
import {useQuery} from '../../../hooks/useQuery';
import { Link } from "react-router-dom";
import BotoesCorrelatos from "./style";

function EditarProjeto() {
  const query = useQuery();
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

  const { handleChange, values, clearForm, initializeForm } = useForm(data);
  return (
    <Template>
      <h1>
        Edição de Projeto
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        console.log(values)
        projetoRepository.atualizaProjeto(values)
        clearForm();
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
            <Button as={Link} className="ButtonLink" to="/">
              Imagens
            </Button>
            <Button as={Link} className="ButtonLink" to="/">
              Vídeos
            </Button>
            <Button as={Link} className="ButtonLink" to="/">
              Anotações
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