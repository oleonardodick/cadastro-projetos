import config from '../config';
import axios from 'axios'

const URL_ANOTACOES = `${config.URL}/anotacao`;

function buscaAnotacaoPorId(anotacaoId){
  return fetch(`${URL_ANOTACOES}/${anotacaoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaAnotacaoPorProjeto(projetoId) {
    return fetch(`${URL_ANOTACOES}?projetoId=${projetoId}`)
      .then(async (respostaServidor) => {
        if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          return resposta;
        }
  
        throw new Error('Não foi possível pegar os dados');
      });
  }

function criaAnotacao({titulo, texto, projetoId}){
  projetoId = parseInt(projetoId)
  axios.post(URL_ANOTACOES,{titulo, texto, projetoId}).then((response) =>{
    return response.data;
  })
}

function atualizaAnotacao({id, titulo, texto, projetoId}){
  projetoId = parseInt(projetoId)
  axios.put(`${URL_ANOTACOES}/${id}`,{titulo, texto, projetoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaAnotacaoPorId,
    buscaAnotacaoPorProjeto,
    criaAnotacao,
    atualizaAnotacao
};
