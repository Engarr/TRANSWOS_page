import React from 'react';
import classes from './Footer.module.css';
import CallBtn from '../Components/CallBtn';

const Footer = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();

	return (
		<div className={classes.footer}>
			<div className={classes.dataBox}>
				<div>
					<h3>Adres:</h3>
					<p>Orły ul. Lipowa 88</p>
					<p>37-716 Orły</p>
				</div>
				<div className={classes.telBox}>
					<h3>Zadzwoń:</h3>
					<CallBtn />
				</div>
			</div>

			<div>
				<p>
					© Wszelkie prawa zastrzeżone <time id='current-year'>{year}</time>
				</p>
			</div>
		</div>
	);
};

export default Footer;
