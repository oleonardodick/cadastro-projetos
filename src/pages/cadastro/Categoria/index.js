import React from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias'
import { useNavigate } from "react-router-dom";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    cor: '#ffffff',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const navigate = useNavigate();

  //const [categorias, setCategorias] = useState([]);

  // async function postCategory(category) {
  //   const URL = 'https://localhost:5001/categoria';
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(category),
  //   };
  //   const response = await fetch(URL, requestOptions);
  //   const data = await response.json();
  //   setCategorias([
  //     ...categorias,
  //     data,
  //   ]);
  // }
  return (
    <Template>
      <h1>
        Cadastro de categoria
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault();
        categoriasRepository.postCategory(values)
        clearForm();
      }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        {/* <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        /> */}

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