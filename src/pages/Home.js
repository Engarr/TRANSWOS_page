import React from 'react';
import classes from '../style/Home.module.css';
import Data from '../Components/Data';
import Aboutus from '../Components/Aboutus';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div className={classes.home}>
			<div>
				<Data />
				<Aboutus />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
