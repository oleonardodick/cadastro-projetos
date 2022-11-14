import React from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import movimentoRepository from '../../../repositories/movimento'
import {useQuery} from '../../../hooks/useQuery';

function CadastroMovimento() {
  const query = useQuery();
  const valoresIniciais = {
    materialId: query.get("material"),
    quantidade: 0.0,
    tipo:'E'
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Entrada de material
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        movimentoRepository.criaMovimentoEntrada(values)
        clearForm();
      }}
      >
        <FormField
          label="Quantidade"
          type="number"
          value={values.quantidade}
          name="quantidade"
          onChange={handleChange}
        />

        <Button>
          Efetuar entrada
        </Button>
      </form>
    </Template>
  );
}

export default CadastroMovimento;