import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import categoriaRepository from '../../../repositories/categorias'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";

function EditarCategoria() {
  const query = useQuery();
  const navigate = useNavigate();
  const categoriaId = query.get("categoriaId");
  const [data, setData] = useState([]);

  useEffect(() => {
    categoriaRepository.buscaCategoriaPorId(categoriaId)
        .then((categorias) => {
            setData(categorias);
            const valoresIniciais = {
                id:categorias.id,
                nome: categorias.nome,
                cor: categorias.cor,
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
        Edição de Categoria
      </h1>

      <form onSubmit={(infos) => {
        categoriaRepository.atualizaCategoria(values)
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
        
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default EditarCategoria;