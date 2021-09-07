import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Logo, Cart } from "./styles";

import LuizaCode from '../../assets/images/logo-h-sm.png'

function Header({ cartSize }) {
  return (
    <>
    <div className="multi-colors"/>
    <Container>
      <div className="content">
        <Link to='/'>
          <Logo src={LuizaCode} alt='nome do grupo' />
        </Link>
        <Cart to='/cart'>
          <div>
            <strong>Meu carrinho</strong>
            <span>{cartSize} itens</span>
          </div>
          <MdShoppingBasket size={36} color='#FFF' />
        </Cart>
      </div>
    </Container>
    </>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
