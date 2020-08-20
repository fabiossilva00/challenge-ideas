import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './styles';
import MenuNav from '../MenuNav';

function WrapperDefault({ children }) {
  return (
    <Wrapper>
      <MenuNav />
      { children }
    </Wrapper>
  );
}

WrapperDefault.propTypes = {
  children: PropTypes.element.isRequired,
};

export default WrapperDefault;
