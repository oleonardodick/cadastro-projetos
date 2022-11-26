import config from '../config';
import axios from 'axios'

const URL_MATERIALPROJETO = `${config.URL}/materialprojeto`;

function buscaMaterialProjetoPorId(materialProjetoId){
  return fetch(`${URL_MATERIALPROJETO}/${materialProjetoId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaMaterialProjetoPorProjeto(projetoId) {
    const jsonFormatado=[];
    return fetch(`${URL_MATERIALPROJETO}?projetoId=${projetoId}`)
      .then(async (respostaServidor) => {
        if (respostaServidor.ok) {
          const resposta = await respostaServidor.json();
          for(const dado of Object.entries(resposta)){
           delete dado[1].materialId
           delete dado[1].projetoId
           jsonFormatado.push(dado[1])
          }
          return jsonFormatado;
        }
        throw new Error('Não foi possível pegar os dados');
      });
  }

async function criaMaterialProjeto({projetoId, materialId, quantidade}){
  projetoId = parseInt(projetoId)
  materialId = parseInt(materialId)
  quantidade = parseFloat(quantidade)
  await axios.post(URL_MATERIALPROJETO,{projetoId, materialId, quantidade}).then((response) =>{
    return response.data;
  })
}

async function atualizaMaterialProjeto({id, projetoId, materialId, quantidade}){
    projetoId = parseInt(projetoId)
    materialId = parseInt(materialId)
    quantidade = parseFloat(quantidade)
  await axios.put(`${URL_MATERIALPROJETO}/${id}`,{projetoId, materialId, quantidade}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaMaterialProjetoPorId,
    buscaMaterialProjetoPorProjeto,
    criaMaterialProjeto,
    atualizaMaterialProjeto
};
