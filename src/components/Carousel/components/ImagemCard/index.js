import React from 'react';
import PropTypes from 'prop-types';
import ImagemCardContainer from './styles';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL
//     .replace(
//       /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//       '$7',
//     );
// }

function ImagemCard({ imagemTitle, imagemUrl, projetoUrl ,categoryColor }) {
//   const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <ImagemCardContainer
      url={imagemUrl}
      href={projetoUrl}
      target="_self"
      style={{ borderColor: categoryColor || 'red' }}
      title={imagemTitle}
    />
  );
}

ImagemCard.propTypes = {
  imagemTitle: PropTypes.string.isRequired,
  imagemUrl: PropTypes.string.isRequired,
  projetoUrl: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default ImagemCard;
