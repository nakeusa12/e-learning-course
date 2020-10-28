import React, { useState } from 'react';
import Api from '../../utils/Api';
import './auth.scss';

const Authenticate = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [submitVal, setSubmitVal] = useState('Login');

	console.log(email, password);

	const onSubmit = async (e) => {
		e.preventDefault();
		const body = {
			email,
			password,
		};
		const options = { header: { 'Content-Type': 'application/json' } };
		const url = '/auth/signup';
		try {
			const res = await Api.post(url, body, options);
			console.log(res);
		} catch (err) {
			console.log(err);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const optionsClick = (e) => {
		setSubmitVal(e.target.id);
	};

	// Clasess
	let loginClass = submitVal === 'Login' ? 'login cliked' : 'login';
	// Signup
	let signupClass = submitVal === 'Signup' ? 'login cliked' : 'login';

	return (
		<div className='auth-container'>
			<div className='auth-option'>
				<div className={loginClass} id='Login' onClick={(e) => optionsClick(e)}>
					Login
				</div>
				<div
					className={signupClass}
					id='Signup'
					onClick={(e) => optionsClick(e)}>
					Signup
				</div>
			</div>
			<div className='body-auth'>
				<h2 className='auth-header'>Logo</h2>
				<form action='' className='form' onSubmit={(e) => onSubmit(e)}>
					<input
						type='email'
						className='input'
						placeholder='your email'
						onChange={(e) => updateEmail(e)}
					/>
					<input
						type='password'
						className='input'
						placeholder='password'
						onChange={(e) => updatePassword(e)}
					/>
					<button type='submit' className='submit'>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Authenticate;
