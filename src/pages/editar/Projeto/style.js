import styled from 'styled-components';

const ContainerCorrelatos = styled.div`
    text-align: center;
`;

function BotoesCorrelatos({ children }) {
  return (
     <ContainerCorrelatos>
        {children}
     </ContainerCorrelatos>
  );
}

export default BotoesCorrelatos;