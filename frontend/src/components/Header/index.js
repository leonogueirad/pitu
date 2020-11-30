import React from 'react';
import {HeaderContainer, Logo} from './styles';
import Icone from '../../assets/logo.svg';

function Header(props) {
    return(
        <>
        <HeaderContainer>
            <Logo src={Icone} alt={props.title} />
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </HeaderContainer>
        </>
    )
}

export default Header;