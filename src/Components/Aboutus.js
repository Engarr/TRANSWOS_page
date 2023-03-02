import React, { useRef } from 'react';
import classes from './Aboutus.module.css';

const Aboutus = () => {
	const aboutUsRef = useRef();
	
	return (
		<section
			className={classes.aboutus}
			id='aboutus'
			ref={aboutUsRef}>


			</section>
	);
};

export default Aboutus;
