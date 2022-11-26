import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import anotacaoRepository from '../../../repositories/anotacao'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";

function EditarAnotacao() {
  const query = useQuery();
  const navigate = useNavigate();
  const anotacaoId = query.get("anotacaoId");
  const [data, setData] = useState([]);

  useEffect(() => {
      anotacaoRepository.buscaAnotacaoPorId(anotacaoId)
        .then((anotacoes) => {
            setData(anotacoes);
            const valoresIniciais = {
                id:anotacoes.id,
                titulo: anotacoes.titulo,
                texto: anotacoes.texto,
                projetoId: anotacoes.projetoId,
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
        Edição de Anotacao
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        anotacaoRepository.atualizaAnotacao(values)
        .then(() => {navigate(`../../lista/anotacao?projeto=${values.projetoId}`)})
        clearForm();
      }}
      >
        <FormField
          label="Titulo da Anotacao"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />
        
        <FormField
          label="Texto da Anotação "
          type="textarea"
          value={values.texto}
          name="preco"
          onChange={handleChange}
        />

        <Button>
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default EditarAnotacao;