import React from 'react';
import {Link} from 'react-router-dom';
import TableItem from './TableItem';
import Button from '../Button';

function Table({
    cabecalho, elementos, hasEdit, hasDelete, link
}){
    return(
        <>
            <table className="striped">
                <thead>
                    <tr>
                        {cabecalho.map((elemento) => (
                            <th key={`headOF_${elemento}`}>{elemento}</th>
                        ))}
                        {hasEdit
                        && <th>Editar</th>}
                        {hasDelete
                        && <th>Deletar</th>}
                    </tr>
                </thead>
                <tbody>
                    {elementos.map((item) => (
                        <TableItem
                            elemento={item}
                            hasEdit={true}
                            hasDelete={false}
                            link = "../../cadastro/materiaPrima"
                        />
                    ))}
                </tbody>
            </table>
            <Button as={Link} className="ButtonLink" to={link}>
                Cadastrar
            </Button>
        </>
    )
}

export default Table;