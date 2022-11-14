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
    return fetch(`${URL_VIDEOS}?projetoId=${projetoId}`)
      .then(async (respostaServidor) => {
        if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados');
      });
  }

function criaVideo({nome, link, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  axios.post(URL_VIDEOS,{nome, link, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

function atualizaVideo({id, nome, link, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  axios.put(`${URL_VIDEOS}/${id}`,{nome, link, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaVideoPorId,
    buscaVideosPorProjeto,
    criaVideo,
    atualizaVideo
};
