import React from 'react';
import classes from './Data.module.css';
import road from '../asset/road.jpg';
import CallBtn from './CallBtn';
import { SlArrowDown } from 'react-icons/sl';

const Data = () => {
	function scrollToSection(id) {
		const element = document.getElementById(id);
		element.scrollIntoView({ behavior: 'smooth' });
	}
	return (
		<section className={classes.dataBox} id='home'>
			<img src={road} className={classes.img} alt='road' />
			<div className={classes.data}>
				<div className={classes.textBox}>
					<h1>Usługi holowania pojazdów </h1>
					<p>Pomoc drogowa do 14 ton</p>
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
