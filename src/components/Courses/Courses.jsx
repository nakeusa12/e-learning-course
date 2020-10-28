import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { courses, sale } from '../../dummyData/courses';
import useWindowDimensions from '../../customHooks/useWindowDimensions';

import './courses.scss';

const Courses = () => {
	const [courseCount, setCourseCount] = useState(0);
	const [courseSlider, setCourseSlider] = useState('list-courses');

	// digunakan untuk mengatur jumlah item tergantung Size layar
	const { width } = useWindowDimensions();

	// Menampilkan hanya 3 Item
	let showCourse = 3;
	if (width <= 596) showCourse = 2;
	// if (width <= 380) showCourse = 1;

	// Mengambil data dari API
	let courseCopy = [...courses];

	// Membuat Item Static
	courseCopy.push({
		title: 'See More Courses',
		price: 'varies',
		author: 'Our Authors',
		img: require('../../images/study.jpg'),
		position: 9999999999999,
		id: 9999999999999,
	});

	// Animasi Slider
	const changeCourseCountBack = (e) => {
		e.stopPropagation();
		setCourseSlider('list-courses slideout-right');
		setTimeout(() => {
			setCourseCount(courseCount - showCourse);
			setCourseSlider('list-courses slidein-right');
		}, 200);
	};

	const changeCourseCountNext = (e) => {
		e.stopPropagation();
		setCourseSlider('list-courses slideout');

		setTimeout(() => {
			setCourseCount(courseCount + showCourse);
			setCourseSlider('list-courses slidein');
		}, 200);
	};

	// Menampilkan Item dengan Perulangan
	const courseList = courseCopy.map((el) => (
		<div key={el.position} className='item'>
			<img className='img' src={el.img} alt='study' />
			<div className='body'>
				<div className='title'>{el.title}</div>
				<div className='author'>by: {el.author}</div>

				{el.saleOptIn && sale ? (
					<div className='price'>
						<span className='strike'>${el.price}</span>${el.price * sale}
					</div>
				) : (
					<div className='price'>{el.price}</div>
				)}
			</div>
			{el.position === 9999999999999 ? (
				<div />
			) : (
				<input type='submit' value='add to cart' className='button' />
			)}
		</div>
	));

	// Pagination Slider
	let activeList = [];
	showCourse === 3
		? (activeList = [
				courseList[courseCount],
				courseList[courseCount + 1],
				courseList[courseCount + 2],
		  ])
		: (activeList = [courseList[courseCount], courseList[courseCount + 1]]);

	return (
		<div className='course'>
			<div className='title-section'>Top Courses</div>
			<div className='line' />
			<div className='container'>
				{courseCount === 0 ? (
					<div />
				) : (
					<div
						className='course-back'
						onClick={(e) => changeCourseCountBack(e)}>
						<FaArrowLeft />
					</div>
				)}

				<div className={courseSlider}>{activeList}</div>
				{courseCount + showCourse >= courseCopy.length ? (
					<div />
				) : (
					<div
						className='course-next'
						onClick={(e) => changeCourseCountNext(e)}>
						<FaArrowRight />
					</div>
				)}
			</div>
		</div>
	);
};

export default Courses;
