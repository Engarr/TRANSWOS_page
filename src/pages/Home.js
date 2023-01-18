import React from 'react';
import classes from '../style/Home.module.css';
import Data from '../Components/Data';
import Aboutus from '../Components/Aboutus';

const Home = () => {
	return (
		<div className={classes.home}>
			<Data />
			<Aboutus/>
		</div>
	);
};

export default Home;
