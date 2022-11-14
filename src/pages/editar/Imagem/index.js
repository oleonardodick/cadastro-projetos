import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import imagemRepository from '../../../repositories/imagem'
import {useQuery} from '../../../hooks/useQuery';

function EditarImagem() {
  const query = useQuery();
  const imagemId = query.get("imagemId");
  const [data, setData] = useState([]);

  useEffect(() => {
      imagemRepository.buscaImagemPorId(imagemId)
        .then((imagens) => {
            setData(imagens);
            const valoresIniciais = {
                id:imagens.id,
                nome: imagens.nome,
                caminho: imagens.caminho,
                descricao: imagens.descricao,
                projetoId: imagens.projetoId,
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
        Edição de Imagem
      </h1>

      <form onSubmit={(infos) => {
        imagemRepository.atualizaImagem(values)
        clearForm();
      }}
      >
        <FormField
          label="Nome da Imagem"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Caminho da Imagem"
          type="text"
          value={values.caminho}
          name="caminho"
          onChange={handleChange}
        />
        
        <FormField
          label="Descricao da Imagem"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <Button>
          Salvar
        </Button>
      </form>
    </Template>
  );
}

export default EditarImagem;