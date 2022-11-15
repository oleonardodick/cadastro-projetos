import config from '../config';
import axios from 'axios'

const URL_ORDEMPRODUCAO = `${config.URL}/ordemproducao`;

function buscaOrdemProducaoPorId(ordemProducaoId){
  return fetch(`${URL_ORDEMPRODUCAO}/${ordemProducaoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaOrdemProducaoPorStatus(status) {
  const jsonFormatado = []
  return fetch(`${URL_ORDEMPRODUCAO}?status=${status}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        for(const dado of Object.entries(resposta)){
          delete dado[1].status
          jsonFormatado.push(dado[1])
          }
        return jsonFormatado;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function criaOrdemProducao({projetoId, quantidade, status}){
  projetoId = parseInt(projetoId)
  quantidade = parseFloat(quantidade)
  axios.post(URL_ORDEMPRODUCAO,{projetoId, quantidade, status}).then((response) =>{
    return response.data;
  })
}

function atualizaOrdemProducao({id, status}){
  axios.put(`${URL_ORDEMPRODUCAO}/${id}`,{status}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaOrdemProducaoPorId,
    buscaOrdemProducaoPorStatus,
    criaOrdemProducao,
    atualizaOrdemProducao
};
