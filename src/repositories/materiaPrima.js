import config from '../config';
import axios from 'axios'

const URL_MATERIAPRIMA = `${config.URL}/material`;

function getAll(){
  const promise = axios.get(URL_MATERIAPRIMA);
  const dataPromise = promise.then((response => response.data))
  return dataPromise;
}

function buscaMaterialPorId(materialId){
  return fetch(`${URL_MATERIAPRIMA}/${materialId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

async function postMaterial({nome, descricao, unidadeMedida}){
  await axios.post(URL_MATERIAPRIMA,{nome, descricao, unidadeMedida}).then((response) =>{
    return response.data;
  })
}

async function atualizaMaterial({id, nome, descricao, unidadeMedida}){
  await axios.put(`${URL_MATERIAPRIMA}/${id}`,{nome, descricao, unidadeMedida}).then((response) =>{
    return response.data;
  })
}

export default {
  getAll,
  buscaMaterialPorId,
  postMaterial,
  atualizaMaterial,
};
