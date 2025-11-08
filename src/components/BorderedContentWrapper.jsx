import React from 'react';
import styled from 'styled-components';
import { DARK_BLUE } from '../styles/colors';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: white;
  padding: 2rem;
  margin: 2rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid ${DARK_BLUE};
    pointer-events: none;
  }
`;

const BorderedContentWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BorderedContentWrapper; 