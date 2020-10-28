import React from 'react';
import ProductCta from '../components/productInfo/ProductCta';
import ProductFeatures from '../components/productInfo/ProductFeatures';
import ProductFixed from '../components/productInfo/ProductFixed';

const Product = () => {
	return (
		<>
			<ProductCta />
			<ProductFixed />
			<ProductFeatures />
		</>
	);
};

export default Product;
