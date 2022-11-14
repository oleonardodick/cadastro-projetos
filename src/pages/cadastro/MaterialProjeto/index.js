import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import materialProjetoRepository from '../../../repositories/materialProjeto'
import materialRepository from '../../../repositories/materiaPrima'
import {useQuery} from '../../../hooks/useQuery';

function CadastroMaterialProjeto() {
  const query = useQuery();
  const [materiais, setMateriais] = useState([]);
  const titulosMateriais = materiais.map(({ nome }) => nome);

  const valoresIniciais = {
    projetoId: query.get("projeto"),
    material:'',
    quantidade:0.0
  };

  useEffect(() => {
    materialRepository
      .getAll()
      .then((materiais) => {
        setMateriais(materiais);
      });
  }, []);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Cadastro de Material para o Projeto
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        const materialEscolhido = materiais.find(
            (material) => material.nome === values.material
        );
        materialProjetoRepository.criaMaterialProjeto({
            projetoId:values.projetoId,
            materialId:materialEscolhido.id,
            quantidade:values.quantidade
        })
        clearForm();
      }}
      >

        <FormField
            label="Material"
            type="text"
            value={values.material}
            name="material"
            onChange={handleChange}
            suggestions={titulosMateriais}
        />

        <FormField
            label="Quantidade"
            type="number"
            value={values.quantidade}
            name="quantidade"
            onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>
    </Template>
  );
}

export default CadastroMaterialProjeto;