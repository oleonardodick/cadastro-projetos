import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import Template from '../../../components/Template';
import ordemProducaoRepository from '../../../repositories/ordemProducao'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";
import FormField from '../../../components/FormField';

function FinalizarProjeto() {
  const query = useQuery();
  const ordemProducaoId = query.get("ordemProducao");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      ordemProducaoRepository.buscaOrdemProducaoPorId(ordemProducaoId)
        .then((ordemProducao) => {
            setData(ordemProducao);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

  return (
    <Template>
        <h1>
        Finalização de projeto
        </h1>

        <form onSubmit={(infos) => {
          infos.preventDefault()
            ordemProducaoRepository.atualizaOrdemProducao({id:data.id, status:'F'})
            .then(() => {navigate('../../projetosfinalizados')})
        }}
        >

        <FormField
            label="Projeto"
            type="text"
            value={data.projeto}
            name="projeto"
            readonly={true}
        />

        <FormField
          label="Quantidade"
          type="number"
          value={data.quantidade}
          name="quantidade"
          readonly={true}
        />

        <Button>
          Finalizar
        </Button>
      </form>
    </Template>
  );
}

export default FinalizarProjeto;