import config from '../config';
import axios from 'axios'

const URL_IMAGENS = `${config.URL}/imagem`;

function buscaImagemPorId(imagemId){
  return fetch(`${URL_IMAGENS}/${imagemId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaImagemPorProjeto(projetoId) {
    return fetch(`${URL_IMAGENS}?projetoId=${projetoId}`)
      .then(async (respostaServidor) => {
        if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados');
      });
  }

function criaImagem({nome, caminho, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  axios.post(URL_IMAGENS,{nome, caminho, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

function atualizaImagem({id, nome, caminho, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  axios.put(`${URL_IMAGENS}/${id}`,{nome, caminho, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaImagemPorId,
    buscaImagemPorProjeto,
    criaImagem,
    atualizaImagem
};
