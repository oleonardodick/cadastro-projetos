import React from "react";

function TableItem({
    elemento, hasEdit, hasDelete
}){
    return(
        <tr key={`lineOf${elemento.id}`}>
            {Object.values(elemento).map((dado, indice) => (
                indice > 0 &&
                <td key={`dateOf_${dado}`}>{dado}</td>
            ))}
            {hasEdit
                && <th>Editar</th>}
            {hasDelete
                && <th>Deletar</th>}
        </tr>
    )
}

export default TableItem;