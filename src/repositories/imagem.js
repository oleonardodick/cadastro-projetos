import config from '../config';
import axios from 'axios'

const URL_IMAGENS = `${config.URL}/imagem`;

function buscaImagemPorId(imagemId){
  return fetch(`${URL_IMAGENS}/${imagemId}`)
  .then(async (respostaServidor) => {
    if (respostaServidor.ok) {
      const resposta = await respostaServidor.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function buscaImagemPorProjeto(projetoId) {
  const jsonFormatado = []
    return fetch(`${URL_IMAGENS}?projetoId=${projetoId}`)
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

async function criaImagem({nome, caminho, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  await axios.post(URL_IMAGENS,{nome, caminho, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

async function atualizaImagem({id, nome, caminho, descricao, projetoId}){
  projetoId = parseInt(projetoId)
  await axios.put(`${URL_IMAGENS}/${id}`,{nome, caminho, descricao, projetoId}).then((response) =>{
    return response.data;
  })
}

export default {
    buscaImagemPorId,
    buscaImagemPorProjeto,
    criaImagem,
    atualizaImagem
};
