import React, { useEffect, useState } from "react";
import Button from '../../../components/Button';
import Template from '../../../components/Template';
import produtoProntoRepository from '../../../repositories/produtoPronto'
import {useQuery} from '../../../hooks/useQuery';
import { useNavigate } from "react-router-dom";
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';

function VenderProduto() {
  const query = useQuery();
  const produtoProntoId = query.get("produtopronto");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
      produtoProntoRepository.buscaProdutoProntoPorId(produtoProntoId)
        .then((produtoPronto) => {
            setData(produtoPronto);
            const valoresIniciais = {
                id:produtoProntoId,
                projeto: produtoPronto.projeto,
                quantidade: 0,
                preco:produtoPronto.preco,
              };
            initializeForm(valoresIniciais)
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);

    const { handleChange, values, initializeForm } = useForm(data);

  return (
    <Template>
        <h1>
            Vender produto
        </h1>

        <form onSubmit={(infos) => {
          infos.preventDefault()
            produtoProntoRepository.efetuaSaidaProdutoPronto(values.id, values.quantidade)
            .then(() => {navigate('../../projetosfinalizados')})
        }}
        >

        <FormField
            label="Projeto"
            type="text"
            value={values.projeto}
            name="projeto"
            readonly={true}
        />

        <FormField
          label="Quantidade"
          type="number"
          value={values.quantidade}
          name="quantidade"
          readonly={false}
          onChange={handleChange}
        />

        <FormField
          label="Preço"
          type="number"
          value={values.preco}
          name="preco"
          readonly={false}
          onChange={handleChange}
        />

        <FormField
          label="Total"
          type="number"
          value={values.preco * values.quantidade}
          name="total"
          readonly={true}
        />

        <Button>
          Efetuar venda
        </Button>
      </form>
    </Template>
  );
}

export default VenderProduto;