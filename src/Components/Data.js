import React from 'react';
import classes from './Data.module.css';
import road from '../asset/road.jpg';
import CallBtn from './CallBtn';
import { SlArrowDown } from 'react-icons/sl';
const Data = () => {
	return (
		<div className={classes.dataBox}>
			<img src={road} className={classes.img} alt='road' />
			<div className={classes.data}>
				<div className={classes.textBox}>
					<h2>WOŚ STANISŁAW TRANSWOŚ</h2>
					<h3>Usługi holowania pojazdów </h3>
					<p>Pomoc drogowa do 14 ton</p>
					<CallBtn />
				</div>
				<div className={classes.arrowBox}>
					<SlArrowDown className={classes.arrow} />
				</div>
			</div>
		</div>
	);
};

export default Data;
