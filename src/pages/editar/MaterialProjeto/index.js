import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import materialProjetoRepository from '../../../repositories/materialProjeto'
import materialRepository from '../../../repositories/materiaPrima'
import {useQuery} from '../../../hooks/useQuery';

function EditarMaterialProjeto() {
  const query = useQuery();
  const [materiais, setMateriais] = useState([]);
  const materialProjetoId = query.get("materialProjetoId");
  const [data, setData] = useState([]);
  const titulosMateriais = materiais.map(({ nome }) => nome);

  useEffect(() => {
    materialProjetoRepository.buscaMaterialProjetoPorId(materialProjetoId)
    .then((materiaisProjeto) => {
        setData(materiaisProjeto);
        const valoresIniciais = {
            id:materiaisProjeto.id,
            projetoId: materiaisProjeto.projetoId,
            materialId: materiaisProjeto.materialId,
            material: materiaisProjeto.nomeMaterial,
            quantidade: materiaisProjeto.quantidade,
            };
        initializeForm(valoresIniciais)
    })
    .catch((err) => {
        console.log(err.message);
    });

    materialRepository
    .getAll()
    .then((materiais) => {
      setMateriais(materiais);
    });

    }, []);

  const { handleChange, values, clearForm, initializeForm } = useForm(data);
  return (
    <Template>
      <h1>
        Edição de Material
      </h1>

      <form onSubmit={(infos) => {
        const materialEscolhido = materiais.find(
            (material) => material.nome === values.material
        );

        materialProjetoRepository.atualizaMaterialProjeto({
            id:values.id,
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
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default EditarMaterialProjeto;