import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconMenu from './IconMenu';
import Menu from './Menu';

const items = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Bin2Dec',
    link: '/bin2dec',
  },
];

function MenuNav({ children }) {
  const [open, setOpen] = useState(false);
  const handlerClick = () => setOpen(!open);

  return (
    <>
      <IconMenu onClick={handlerClick} />
      <Menu open={open} items={items} closeMenu={handlerClick} />
      { children }
    </>
  );
}

MenuNav.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MenuNav;
