import config from '../config';
import axios from 'axios'

const URL_PRODUTOPRONTO = `${config.URL}/produtopronto`;
const URL_MOVIMENTOPROJETO = `${config.URL}/movimentoprojeto`;

function buscaProdutoProntoPorId(produtoProntoId){
  return fetch(`${URL_PRODUTOPRONTO}/${produtoProntoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaProdutosProntos(){
  const promise = axios.get(URL_PRODUTOPRONTO);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

async function efetuaSaidaProdutoPronto(produtoProntoId, quantidade){
  produtoProntoId = parseInt(produtoProntoId);
  quantidade = parseFloat(quantidade);
  const tipo = 'S';
  await axios.post(URL_MOVIMENTOPROJETO,{quantidade,tipo,produtoProntoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaProdutoProntoPorId,
    buscaProdutosProntos,
    efetuaSaidaProdutoPronto
};
