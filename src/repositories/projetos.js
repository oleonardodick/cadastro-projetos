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

function getAll(){
  const promise = axios.get(URL_CATEGORIES);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

function postCategory({nome, cor}){
  axios.post(URL_CATEGORIES,{nome, cor}).then((response) =>{
    return response.data;
  })
}

export default {
  getAllWithProjects,
  getAll,
  postCategory,
};
