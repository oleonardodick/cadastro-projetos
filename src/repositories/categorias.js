import config from '../config';
import axios from 'axios'

const URL_CATEGORIES = `${config.URL}/categoria`;

function getAllWithProjects() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaServidor) => {
      if (respostaServidor.ok) {
        const resposta = await respostaServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados');
    });
}

function buscaCategoriaPorId(categoriaId){
  return fetch(`${URL_CATEGORIES}/${categoriaId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaCategorias(){
  const promise = axios.get(URL_CATEGORIES);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

function criaCategoria({nome, cor}){
  axios.post(URL_CATEGORIES,{nome, cor}).then((response) =>{
    return response.data;
  })
}

function atualizaCategoria({id, nome, cor}){
  axios.put(`${URL_CATEGORIES}/${id}`,{nome, cor}).then((response) =>{
    return response.data;
  })
}

export default {
  getAllWithProjects,
  buscaCategoriaPorId,
  buscaCategorias,
  criaCategoria,
  atualizaCategoria,
};
