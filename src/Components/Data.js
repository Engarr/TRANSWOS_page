import React from 'react';
import classes from './Data.module.css';
import road from '../asset/road.jpg';
import CallBtn from './CallBtn';
const Data = () => {
	return (
		<div className={classes.dataBox}>
			<img src={road} className={classes.img} alt='road' />
			<div className={classes.data}>
				<h2>WOŚ STANISŁAW TRANSWOŚ</h2>
				<p>Usługi holowania pojazdów </p>
				<p>Pomoc drogowa do 14 ton</p>
				<CallBtn />
			</div>
		</div>
	);
};

export default Data;
