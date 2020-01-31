import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Navi = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px){
        padding-bottom: 0;
    }
`;
const NavLink = styled(Link)`
    color: #fff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    // seleccionar el ultimo y quitarle el margen
    &:last-of-type{
        margin-right: 0;
    }

    //estilo al link de la pagina actual
    &.pagina-actual{
        border-bottom: 2px solid #fff;
    }
`;

const Nav = () => {
    return ( 
        <Navi>
            <NavLink 
            to={'/'}
            activeClassName="pagina-actual"
            >Inicio</NavLink>
            <NavLink 
            to={'/us'}
            activeClassName="pagina-actual"
            >Nosotros</NavLink>
        </Navi>
     );
}
 
export default Nav;