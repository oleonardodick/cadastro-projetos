import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import Template from '../../../components/Template';
import useForm from '../../../hooks/useForm';
import ordemProducaoRepository from '../../../repositories/ordemProducao'
import projetoRepository from '../../../repositories/projetos'

function IniciarProjeto() {
  const [projetos, setProjetos] = useState([]);
  const titulosProjetos = projetos.map(({ descricao }) => descricao);

  const valoresIniciais = {
    projeto: '',
    quantidade:0.0,
    status:'I',
  };

  useEffect(() => {
    projetoRepository
      .getAll()
      .then((projetosRetornados) => {
        setProjetos(projetosRetornados);
      });
  }, []);

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  return (
    <Template>
      <h1>
        Início de projeto
      </h1>

      <form onSubmit={(infos) => {
        infos.preventDefault()
        const projetoEscolhido = projetos.find(
            (projeto) => projeto.descricao === values.projeto
        );
          
        ordemProducaoRepository.criaOrdemProducao({
            projetoId:projetoEscolhido.id,
            quantidade:values.quantidade,
            status:values.status
        })
        clearForm();
      }}
      >

        <FormField
            label="Projeto"
            type="text"
            value={values.projeto}
            name="projeto"
            onChange={handleChange}
            suggestions={titulosProjetos}
        />

        <FormField
            label="Quantidade"
            type="number"
            value={values.quantidade}
            name="quantidade"
            onChange={handleChange}
        />

        <Button>
          Iniciar projeto
        </Button>
      </form>
    </Template>
  );
}

export default IniciarProjeto;