import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList, Product } from "./styles";
import api from "../../services/api";
import * as CartActions from "../../store/modules/cart/actions";
import { formatPrice } from "../../util/format";

function Home({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const result = await api.get("/products");

    const data = result.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = productId => {
    addToCartRequest(productId);
  };

  return (
    <ProductList>
      {products.map(product => (
        <Product key={product.id}>
          <strong>{product.title}</strong>
          <img src={product.image} alt={product.name} />
          <span>{product.formattedPrice}</span>

          <button type='button' onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color='#FFF' />
              {amount[product.id] || 0}
            </div>

            <span>Adicionar ao carrinho</span>
          </button>
        </Product>
      ))}
    </ProductList>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
