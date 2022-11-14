import React from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import projetoRepository from '../../../repositories/projetos'
import {useQuery} from '../../../hooks/useQuery';

function CadastroProjeto() {
  const query = useQuery();
  const valoresIniciais = {
    descricao: '',
    preco: 0.0,
    capa:'',
    categoriaId: query.get("categoria"),
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Cadastro de Projeto
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        projetoRepository.criaProjeto(values)
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

        <Button>
          Cadastrar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroProjeto;