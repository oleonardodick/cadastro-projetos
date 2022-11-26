import React from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import anotacaoRepository from '../../../repositories/anotacao'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";

function CadastroAnotacao() {
  const query = useQuery();
  const navigate = useNavigate();
  const valoresIniciais = {
    titulo: '',
    texto: '',
    projetoId: query.get("projeto"),
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Cadastro de Anotacao
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        anotacaoRepository.criaAnotacao(values)
        .then(() => {navigate(`../../lista/anotacao?projeto=${query.get("projeto")}`)})
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
          label="Texto do Anotacao"
          type="textarea"
          value={values.texto}
          name="texto"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroAnotacao;