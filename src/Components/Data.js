import React from 'react';
import classes from './Data.module.css';
import road from '../asset/road.jpg';
const Data = () => {
    
	return (
		<div className={classes.dataBox}>
				<img src={road} className={classes.img} alt='road' />
			<div className={classes.data}>
				<h2>WOŚ STANISŁAW TRANSWOŚ</h2>
				<p>Usługi holowania pojazdów </p>
				<p>Pomoc drogowa powyżej 3,5T</p>
				<h3>Tel: 608 450 246</h3>
			</div>
		</div>
	);
};

export default Data;
