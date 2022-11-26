import React, { useEffect, useState } from "react";
import { ImagemCardGroupContainer, Title } from './styles';
import { Link } from 'react-router-dom';
import projetoRepository from '../../repositories/projetos';

 import ImagemCard from './components/ImagemCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  category,
}) {
  const categoryId = category.id;
  const categoryTitle = category.nome;
  const categoryColor = category.cor;
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    projetoRepository.buscaProjetoPorCategoria(categoryId)
      .then((projetos) => {
        setProjetos(projetos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <ImagemCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            <Link 
            to={{
              pathname:'./../lista/projetos',
              search:'categoria='+categoryId,
            }}>
              {categoryTitle}
            </Link>
          </Title>
        </>
      )}
      <Slider
        categoryColor={categoryColor}
      >
      {projetos.map((projeto, index) => {
        return (
          <>
            <SliderItem key={projeto.descricao}>
              <ImagemCard
                imagemTitle={projeto.descricao}
                imagemUrl={`imagens/${projeto.capa}`}
                projetoUrl={`./../editar/projeto?projetoId=${projeto.id}`}
                categoryColor = {categoryColor}
              />
            </SliderItem>
          </>
        );
      })}
      </Slider>
    </ImagemCardGroupContainer>
  );
}

export default Carousel;
