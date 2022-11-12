import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel';
import Template from '../../components/Template';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  useEffect(() => {
    categoriasRepository.getAllWithProjects()
      .then((categoriasComProjetos) => {
        setDadosIniciais(categoriasComProjetos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Template>
      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <Carousel
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </Template>
  );
}

export default Home;
