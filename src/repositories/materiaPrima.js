import config from '../config';
import axios from 'axios'

const URL_MATERIAPRIMA = `${config.URL}/material`;

function getAll(){
  const promise = axios.get(URL_MATERIAPRIMA);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

function postMaterial({nome, descricao, unidadeMedida}){
  axios.post(URL_MATERIAPRIMA,{nome, descricao, unidadeMedida}).then((response) =>{
    return response.data;
  })
}

export default {
  getAll,
  postMaterial,
};
