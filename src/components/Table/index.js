import React from 'react';
import {Link} from 'react-router-dom';
import TableItem from './TableItem';
import Button from '../Button';

function Table({
    cabecalho, elementos, linkEditar, linkCadastrar
}){
    return(
        <>
            <table className="striped">
                <thead>
                    <tr>
                        {cabecalho.map((elemento) => (
                            <th key={`headOF_${elemento}`}>{elemento}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {elementos.map((item) => ( 
                        <TableItem
                            elemento={item}
                            linkEditar={linkEditar}
                        />
                    ))}
                </tbody>
            </table>
            <Button as={Link} className="ButtonLink" to={linkCadastrar}>
                Cadastrar
            </Button>
        </>
    )
}

export default Table;