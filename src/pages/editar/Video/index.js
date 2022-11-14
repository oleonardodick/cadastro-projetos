import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import videoRepository from '../../../repositories/video'
import {useQuery} from '../../../hooks/useQuery';

function EditarVideo() {
  const query = useQuery();
  const videoId = query.get("videoId");
  const [data, setData] = useState([]);

  useEffect(() => {
      videoRepository.buscaVideoPorId(videoId)
        .then((videos) => {
            setData(videos);
            const valoresIniciais = {
                id:videos.id,
                nome: videos.nome,
                link: videos.link,
                descricao: videos.descricao,
                projetoId: videos.projetoId,
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
        Edição de Video
      </h1>

      <form onSubmit={(infos) => {
        videoRepository.atualizaVideo(values)
        clearForm();
      }}
      >
        <FormField
          label="Nome do Video"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />

        <FormField
          label="Link da Video"
          type="text"
          value={values.link}
          name="link"
          onChange={handleChange}
        />
        
        <FormField
          label="Descricao da Video"
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

export default EditarVideo;