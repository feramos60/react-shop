import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';

import addToCartImage from '@icons/bt_add_to_cart.svg';


const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.category.image} alt="" />
			<div className="product-info">
				<div>
					<p>${ product.price },00</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product) }>
					<img src={ addToCartImage } alt="" />
				</figure>				
			</div>
		</div>
	);
}

export default ProductItem;
