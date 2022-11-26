import React from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/video'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";

function CadastroVideo() {
  const query = useQuery();
  const navigate = useNavigate();
  const valoresIniciais = {
    nome: '',
    link: '',
    descricao:'',
    projetoId: query.get("projeto"),
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Cadastro de Video
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        videoRepository.criaVideo(values)
        .then(() => {navigate(`../../lista/video?projeto=${query.get("projeto")}`)})
        clearForm();
      }}
      >
        <FormField
          label="Nome do Video"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Link do Video"
          type="text"
          value={values.link}
          name="link"
          onChange={handleChange}
        />

        <FormField
          label="Descricao do Video"
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

export default CadastroVideo;