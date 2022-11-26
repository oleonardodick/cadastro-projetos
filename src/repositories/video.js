import config from '../config';
import axios from 'axios'

const URL_VIDEOS = `${config.URL}/video`;

function buscaVideoPorId(videoId){
  return fetch(`${URL_VIDEOS}/${videoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaVideosPorProjeto(projetoId) {
  const jsonFormatado = []
    return fetch(`${URL_VIDEOS}?projetoId=${projetoId}`)
      .then(async (respostaServidor) => {
        if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          for(const dado of Object.entries(resposta)){
            delete dado[1].projetoId
            jsonFormatado.push(dado[1])
           }
          return jsonFormatado;
        }
  
        throw new Error('Não foi possível pegar os dados');
      });
  }

async function criaVideo({nome, link, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  await axios.post(URL_VIDEOS,{nome, link, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

async function atualizaVideo({id, nome, link, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  await axios.put(`${URL_VIDEOS}/${id}`,{nome, link, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaVideoPorId,
    buscaVideosPorProjeto,
    criaVideo,
    atualizaVideo
};
