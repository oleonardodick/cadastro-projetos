import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import {useQuery} from '../../../hooks/useQuery';
import materiaPrimaRepository from '../../../repositories/materiaPrima'
import { useNavigate } from "react-router-dom";

function CadastroMateriaPrima() {
    const query = useQuery();
    const materialId = query.get("materiaPrimaId");
    const navigate = useNavigate();
    const [data, setData] = useState([]);
  
    useEffect(() => {
        materiaPrimaRepository.buscaMaterialPorId(materialId)
          .then((materiais) => {
              setData(materiais);
              const valoresIniciais = {
                  id:materiais.id,
                  nome: materiais.nome,
                  descricao:materiais.descricao,
                  unidadeMedida: materiais.unidadeMedida,
                };
              initializeForm(valoresIniciais)
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);
  
  
  
    const { handleChange, values, initializeForm } = useForm(data);
  return (
    <Template>
      <h1>
        Editar Matéria Prima
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        materiaPrimaRepository.atualizaMaterial(values)
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
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroMateriaPrima;