import React from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import imagemRepository from '../../../repositories/imagem'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";

function CadastroImagem() {
  const query = useQuery();
  const navigate = useNavigate();
  const valoresIniciais = {
    nome: '',
    caminho: '',
    descricao: '',
    projetoId: query.get("projeto"),
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Cadastro de Imagem
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        imagemRepository.criaImagem(values)
        .then(() => {navigate(`../../lista/imagem?projeto=${query.get("projeto")}`)})
        clearForm();
      }}
      >
        <FormField
          label="Nome da Imagem"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Caminho da Imagem"
          type="text"
          value={values.caminho}
          name="caminho"
          onChange={handleChange}
        />

        <FormField
          label="Descricao da Imagem"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroImagem;