import React from 'react';
import classes from '../style/Home.module.css';
import Data from '../Components/Data';
import Aboutus from '../Components/Aboutus';
import Footer from '../Components/Footer';

const Home = () => {
	
	
	return (
		<div className={classes.home}>
			<Data />
			<Aboutus/>
			<Footer />
		</div>
	);
};

export default Home;
