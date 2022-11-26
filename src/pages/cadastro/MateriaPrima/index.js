import React from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import materiaPrimaRepository from '../../../repositories/materiaPrima'
import { useNavigate } from 'react-router-dom';

function CadastroMateriaPrima() {
  const valoresIniciais = {
    nome: '',
    descricao:'',
    unidademedida: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);
  const navigate = useNavigate();

  return (
    <Template>
      <h1>
        Cadastro de Matéria Prima
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        materiaPrimaRepository.postMaterial(values)
        .then(() => {navigate('../../lista/materiaprima')})
      }}
      >
        <FormField
          label="Nome"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />   

        <FormField
          label="Unidade de Medida"
          type="text"
          value={values.unidadeMedida}
          name="unidadeMedida"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroMateriaPrima;