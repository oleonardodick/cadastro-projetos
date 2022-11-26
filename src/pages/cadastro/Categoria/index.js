import React from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias'
import { useNavigate } from 'react-router-dom';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    cor: '#ffffff',
  };

  const { handleChange, values } = useForm(valoresIniciais);
  const navigate = useNavigate();
  return (
    <Template>
      <h1>
        Cadastro de categoria
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        categoriasRepository.criaCategoria(values)
          .then(() => {navigate('../../lista/categorias')})
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroCategoria;