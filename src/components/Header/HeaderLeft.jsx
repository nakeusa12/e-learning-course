import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Kusamy from '../../images/kusamy.png';

const HeaderLeft = (props) => {
	const navHome = () => {
		props.history.push('/');
	};
	return (
		<div className='header__left'>
			<Link to='/'>
				<img
					src={Kusamy}
					alt='Logo'
					className='header__left--img'
					onClick={() => navHome()}
				/>
			</Link>
		</div>
	);
};

export default withRouter(HeaderLeft);
