import React from 'react';
import classes from './Footer.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';

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
					<h3>Kontakt:</h3>
					<p><BsFillTelephoneFill/> 608 450 246</p>
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
