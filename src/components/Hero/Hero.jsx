import React from 'react';
import { withRouter } from 'react-router-dom';
import './hero.scss';

const Hero = (props) => {
	const toProduct = () => {
		props.history.push('/product');
	};

	return (
		<div className='cta-top'>
			<div className='cta-top_img' />
			<div className='cta-top_textbox'>
				<div className='cta-top_headline'>Automate Your Future</div>
				<div className='cta-top_story'>
					Did you know, 25% of business owners work over 60 hours per week?
					Learn to work smartet, by leveraging technology.
				</div>
				<div className='cta-top_story'>
					In this two week course, you will focus on the bigger picture while
					you implement the most powerful automated sales system ever created.
				</div>
				<input
					type='submit'
					className='cta-top_button'
					value='Learn The Alchemy of Automation'
					onClick={() => toProduct()}
				/>
			</div>
		</div>
	);
};

export default withRouter(Hero);
