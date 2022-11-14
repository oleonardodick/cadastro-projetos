import config from '../config';
import axios from 'axios'

const URL_MOVIMENTOS = `${config.URL}/movimento`;

function buscaMovimentoPorId(movimentoId){
  return fetch(`${URL_MOVIMENTOS}/${movimentoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaMovimentos(){
  const promise = axios.get(URL_MOVIMENTOS);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

function criaMovimentoEntrada({materialId, quantidade, tipo}){
    materialId = parseInt(materialId)
    quantidade = parseFloat(quantidade)
    axios.post(URL_MOVIMENTOS,{materialId, quantidade, tipo}).then((response) =>{
    return response.data;
  })
}

function atualizaMovimento({id, materialId, quantidade, tipo}){
    materialId = parseInt(materialId)
    quantidade = parseFloat(quantidade)
    axios.put(`${URL_MOVIMENTOS}/${id}`,{materialId, quantidade, tipo}).then((response) =>{
      return response.data;
    })
}

export default {
    buscaMovimentoPorId,
    buscaMovimentos,
    criaMovimentoEntrada,
    atualizaMovimento,
};
