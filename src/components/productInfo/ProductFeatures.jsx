import React from 'react';
import { courses } from '../../dummyData/courses';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import './product.scss';

const ProductFeatures = () => {
	const { features } = courses[0];

	return (
		<div className='product-features'>
			<div className='title'>Topics Cover</div>
			<div className='list'>
				{features.map((el) => (
					<div className='feature' key={el}>
						<div className='check'>
							<IoIosCheckmarkCircleOutline />
						</div>
						{el}
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductFeatures;
