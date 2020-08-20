import styled, { css } from 'styled-components';

const Navigation = styled.nav`
    width: 15vw;
    height: 100vh;
    background-color: #706fd3;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    transition: transform 255ms linear;

    ${({ active }) => active && css`
        transform: translateX(0);
    `};
`;

export const ItemMenu = styled.a`
    display: block;
    text-decoration: none;
    padding: 10px 15px;
    font-family: 'Bangers', cursive;
    font-size: 25px;
    color: #F1F1F1;
    background-color: #706fd3;
    transition: background-color 100ms linear;

    &:hover {
        background-color: #2B3B98
    }
`;

export default Navigation;
