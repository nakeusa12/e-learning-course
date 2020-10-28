import React from 'react';
import { withRouter } from 'react-router-dom';

const HeaderLeft = (props) => {
	const navHome = () => {
		props.history.push('/');
	};
	return (
		<div className='header__left'>
			{/* <Link to="/">
				<img src="logo" alt="Logo" className="header__left--img" />
			</Link> */}
			<h1 onClick={() => navHome()}>LOGO</h1>
		</div>
	);
};

export default withRouter(HeaderLeft);
