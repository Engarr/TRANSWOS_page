import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
	const currentDate = new Date();
	const year = currentDate.getFullYear();

	return (
		<div className={classes.footer}>
			
			<p>
            © Wszelkie prawa zastrzeżone <time id='current-year'>{year}</time>
			</p>
		</div>
	);
};

export default Footer;
