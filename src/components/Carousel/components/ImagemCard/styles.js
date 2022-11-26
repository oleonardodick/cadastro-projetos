import styled from 'styled-components';

export const ImagemCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ imagem }) => `url(${imagem})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0px 0px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const TituloProjeto = styled.div`
  color: black;
  text-align: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  margin: 0;
  border-radius: 0px 0px 10px 10px;
  height: 30px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;
