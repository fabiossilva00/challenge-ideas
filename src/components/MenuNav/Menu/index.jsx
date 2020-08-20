import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Navigation, { ItemMenu } from './styles';
import IconMenu from '../IconMenu';

function Menu({ items, open, closeMenu }) {
  return (
    <Navigation active={open}>
      <IconMenu open={open} onClick={closeMenu} />
      {items.map((item, index) => (
        <ItemMenu
          key={index.toString()}
          as={Link}
          to={item.link}
        >
          {item.name}
        </ItemMenu>
      ))}
    </Navigation>
  );
}

Menu.defaultProps = {
  items: [{ name: 'Home', link: '/' }],
  open: false,
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  open: PropTypes.bool,
  closeMenu: PropTypes.func.isRequired,
};

export default Menu;
