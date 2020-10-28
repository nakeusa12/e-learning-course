import React from 'react';
import './header.scss';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
	return (
		<div className='header'>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</div>
	);
};

export default Header;
