import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import {useQuery} from '../../../hooks/useQuery';
import materiaPrimaRepository from '../../../repositories/materiaPrima'

function CadastroMateriaPrima() {
    const query = useQuery();
    const materialId = query.get("materiaPrimaId");
    const [data, setData] = useState([]);
  
    useEffect(() => {
        materiaPrimaRepository.buscaMaterialPorId(materialId)
          .then((materiais) => {
              setData(materiais);
              const valoresIniciais = {
                  id:materiais.id,
                  nome: materiais.nome,
                  descricao:materiais.descricao,
                  unidademedida: materiais.unidadeMedida,
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
        Editar Matéria Prima
      </h1>

      <form onSubmit={(infos) => {
        materiaPrimaRepository.postMaterial(values)
        clearForm();
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
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroMateriaPrima;