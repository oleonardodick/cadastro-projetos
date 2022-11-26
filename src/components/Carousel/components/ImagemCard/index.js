import React from 'react';
import PropTypes from 'prop-types';
import {ImagemCardContainer, TituloProjeto} from './styles';

function ImagemCard({ imagemTitle, imagemUrl, projetoUrl ,categoryColor }) {
  return (
    <>
    <ImagemCardContainer
      url={imagemUrl}
      href={projetoUrl}
      target="_self"
      style={{ borderColor: categoryColor || 'red' }}
      title={imagemTitle}
      imagem={process.env.PUBLIC_URL+imagemUrl}
    />
    <TituloProjeto>{imagemTitle}</TituloProjeto>
    </>
  );
}

ImagemCard.propTypes = {
  imagemTitle: PropTypes.string.isRequired,
  imagemUrl: PropTypes.string.isRequired,
  projetoUrl: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default ImagemCard;
