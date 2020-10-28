import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='page-break' />
			<div className='top'>
				<Link className='link' to='/auth'>
					Join
				</Link>
				<Link className='link' to='#'>
					Teach
				</Link>
				<Link className='link' to='#'>
					Contact
				</Link>
				<Link className='link' to='#'>
					About
				</Link>
			</div>
			<div className='lowest'>
				<h2 className='logo-footer'>Logo</h2>
				<div className='copyright'>&copy; Nakeusa 2020</div>
			</div>
		</div>
	);
};

export default Footer;
