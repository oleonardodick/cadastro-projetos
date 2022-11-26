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
  const jsonFormatado = []
    return fetch(`${URL_ANOTACOES}?projetoId=${projetoId}`)
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

async function criaAnotacao({titulo, texto, projetoId}){
  projetoId = parseInt(projetoId)
  await axios.post(URL_ANOTACOES,{titulo, texto, projetoId}).then((response) =>{
    return response.data;
  })
}

async function atualizaAnotacao({id, titulo, texto, projetoId}){
  projetoId = parseInt(projetoId)
  await axios.put(`${URL_ANOTACOES}/${id}`,{titulo, texto, projetoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaAnotacaoPorId,
    buscaAnotacaoPorProjeto,
    criaAnotacao,
    atualizaAnotacao
};
