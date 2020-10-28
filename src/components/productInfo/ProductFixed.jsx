import React from 'react';
import useScrollTracker from '../../customHooks/useScrollTracker';
import { courses, sale } from '../../dummyData/courses';

const ProductFixed = () => {
	const { tooClose, scrollY, windowHeight, documentHeight } = useScrollTracker(
		90
	);

	console.log('too close ' + tooClose);
	console.log('YYYYY ' + scrollY);
	console.log('window height: ' + windowHeight);
	console.log('document height: ' + documentHeight);

	const fixedClass = tooClose
		? 'product-cta__buynow--container product-cta__buynow--container--offset'
		: 'product-cta__buynow--container';

	const { price, saleOptIn, length, accessType, certification } = courses[0];
	let currentPrice = saleOptIn && sale ? price * sale : price;

	return (
		<div className={fixedClass}>
			<div className='product-cta__buynow'>
				<img
					className='product-cta__buynow--top'
					src='https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60'
					alt='top img'
				/>

				<div className='product-cta__buynow--bottom'>
					<div className='product-cta__buynow--bottom--price'>
						${currentPrice}
						{saleOptIn ? (
							<span className='product-cta__buynow--bottom--price--slash'>
								${price}
							</span>
						) : null}
					</div>
					<input
						className='product-cta__buynow--bottom--addtocart'
						type='submit'
						value='add to cart'
					/>
				</div>
				<div className='product-cta__buynow--bottom--points'>
					<strong>course includes :</strong>
					<div className='product-cta__buynow--bottom--points--medium'>
						<li>length: {length}</li>
						<li>access: {accessType}</li>
						<li>certification: {certification}</li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductFixed;
