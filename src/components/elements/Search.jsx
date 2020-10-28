import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import './elements.scss';

const Search = () => {
	const submitForm = (e) => {
		e.preventDefault();
		console.log('Enter Aja');
	};

	return (
		<form className='search-form' onSubmit={(e) => submitForm}>
			<IoIosSearch className='icon' />
			<input type='text' className='search' placeholder='Search ...' />
		</form>
	);
};

export default Search;
