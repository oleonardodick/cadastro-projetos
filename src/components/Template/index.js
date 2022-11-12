import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--white);
    color: var(--black);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
`;

function Template({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
