import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none",
    color: 'blue'
  };

function TableItem({
    elemento, linkEditar, outrosLinks
}){
    return(
        <tr key={`lineOf${elemento.id}`}>
            {Object.values(elemento).map((dado, indice) => (
                indice > 0 &&
                <td key={`dateOf_${dado}`}>{dado}</td>
            ))}
            {linkEditar && <td><Link to={linkEditar+elemento.id} style={linkStyle}>Editar</Link></td>}
            {outrosLinks &&
                outrosLinks.map((link) => (
                    <td><Link to={link.link+elemento.id} style={linkStyle}>{link.texto}</Link></td>
                ))
            }
        </tr>
    )
}

export default TableItem;