import styled, { css } from 'styled-components';
import menu from '../../../assets/images/menu.svg';
import arrowClose from '../../../assets/images/arrowClose.svg';

const IconMenu = styled.img.attrs((props) => ({ src: !props.open ? menu : arrowClose }))`
    width: 4.2vw;
    padding: 10px;
    cursor: pointer;
    transition: transform 100ms linear;

    ${({ open }) => open && css`
        transform: translateX(10.8vw)
    `};
`;

export default IconMenu;
