import React, { useEffect, useState } from "react";
import produtoProntoRepository from '../../../repositories/produtoPronto';
import Template from '../../../components/Template';
import Table from '../../../components/Table';

function ProdutoPronto(){
    const [dadosIniciais, setDadosIniciais] = useState([]);
    const outrosLinks =[{
      texto:"Efetuar venda",
      link:"../../venderproduto?produtopronto="
    }]
    useEffect(() => {
        produtoProntoRepository.buscaProdutosProntos()
          .then((produtosProntos) => {
            setDadosIniciais(produtosProntos);
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, []);

      return(
        <Template>
          <h1>Produtos Prontos</h1>
           <Table
              cabecalho={['Projeto', 'Saldo', 'Valor Unitário']}
              elementos={dadosIniciais}
              outrosLinks={outrosLinks}
           />
        </Template>
      )
}

export default ProdutoPronto;