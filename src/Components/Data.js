import React from 'react';
import classes from './Data.module.css';
import road from '../asset/road.jpg';
import CallBtn from './CallBtn';
import { SlArrowDown } from 'react-icons/sl';

const Data = () => {
	function scrollToSection(id) {
		const element = document.getElementById(id);
		const offset = element.getBoundingClientRect().top + window.pageYOffset;
		const bodyMargin = parseInt(getComputedStyle(document.body).marginTop, 10);
		const targetOffset = offset - bodyMargin - 80;
		window.scrollTo({
			top: targetOffset,
			behavior: 'smooth',
		});
	}
	return (
		<section className={classes.dataBox} id='home'>
			<img src={road} className={classes.img} alt='road' />
			<div className={classes.data}>
				<div className={classes.textBox}>
					<h1>Usługi holowania pojazdów </h1>
					<p>Pomoc drogowa do 14 ton</p>
					<p>Potrzebujesz pomocy?</p>
					<h3>Zadzwoń!</h3>
					<CallBtn />
				</div>
				<div
					className={classes.arrowBox}
					onClick={() => scrollToSection('aboutus')}>
					<SlArrowDown className={classes.arrow} />
				</div>
			</div>
		</section>
	);
};

export default Data;
