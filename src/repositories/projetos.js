import config from '../config';
import axios from 'axios'

const URL_PROJECT = `${config.URL}/Projeto`;

function buscaProjetoPorCategoria(categoriaId) {
  const jsonFormatado=[]
  return fetch(`${URL_PROJECT}?categoriaId=${categoriaId}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        for(const dado of Object.entries(resposta)){
          delete dado[1].categoriaId
          jsonFormatado.push(dado[1])
         }
        return jsonFormatado;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function buscaProjetoPorId(projetoId){
  return fetch(`${URL_PROJECT}/${projetoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function getAll(){
  const promise = axios.get(URL_PROJECT);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

async function criaProjeto({descricao, preco, capa, categoriaId}){
  preco = parseFloat(preco)
  categoriaId = parseInt(categoriaId)
  await axios.post(URL_PROJECT,{descricao, preco, capa, categoriaId}).then((response) =>{
    return response.data;
  })
}

async function atualizaProjeto({id, descricao, preco, capa, categoriaId}){
  preco = parseFloat(preco)
  categoriaId = parseInt(categoriaId)
  await axios.put(`${URL_PROJECT}/${id}`,{descricao, preco, capa, categoriaId}).then((response) =>{
    return response.data;
  })
}

export default {
  buscaProjetoPorCategoria,
  buscaProjetoPorId,
  getAll,
  criaProjeto,
  atualizaProjeto,
};
