import React from 'react';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import { Link } from 'react-router-dom';
//import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  category,
}) {
  const categoryId = category.id;
  const categoryTitle = category.nome;
  const categoryColor = category.cor;
  //const { videos } = category;
  return (
    <VideoCardGroupContainer>
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
          {
            <ExtraLink href="/" target="_blank">
              Ver todos os projetos
            </ExtraLink>
          }
        </>
      )}
      <Slider
        categoryColor={categoryColor}
      >
        <SliderItem>
          teste
        </SliderItem>
        {/* {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
        <SliderItem>
          Imagem do projeto
        </SliderItem> */}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
