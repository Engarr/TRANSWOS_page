import React, { useState } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import classes from './DarkMode.module.css';

const DarkMode = () => {
	
	const [ligth, setLigth] = useState(true);
	const [dark, setDark] = useState(false);


	return (
		<div className={classes.buttonBox}>
			<div className={`${classes.active}`}></div>
			<div className={classes.iconBox}>
				<button value='light'>
					<RiSunLine />
				</button>
			</div>
			<div className={classes.iconBox}>
				<button value='dark'>
					<RiMoonLine />
				</button>
			</div>
		</div>
	);
};

export default DarkMode;
