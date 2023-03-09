import React, { useState } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import classes from './DarkMode.module.css';

const DarkMode = () => {
	const [mode, setMode] = useState('light');

	const lightHandler = () => {
		setMode('dark');
	};
	const darkHandler = () => {
		setMode('light');
	};

	const modeCss =
		mode === 'light'
			? classes.light
			: mode === 'dark'
			? classes.dark
			: classes.light;

	console.log(mode);
	return (
		<div className={classes.buttonBox}>
			<div className={`${classes.active} ${modeCss}`}></div>
			<div className={classes.iconBox}>
				<RiSunLine  onClick={darkHandler} className={classes.icon} />
			</div>
			<div className={classes.iconBox}>
				<RiMoonLine onClick={lightHandler}  className={classes.icon}/>
			</div>
		</div>
	);
};

export default DarkMode;
