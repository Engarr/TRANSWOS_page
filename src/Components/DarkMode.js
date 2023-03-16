import React, { useState, useEffect } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import classes from './DarkMode.module.css';

const themeStyle = localStorage.getItem('theme');

const DarkMode = () => {
	const [mode, setMode] = useState(themeStyle || 'light');
	

	const lightHandler = () => {
		setMode('dark');
		localStorage.setItem('theme', 'dark');
	};
	const darkHandler = () => {
		setMode('light');
		localStorage.setItem('theme', 'light');
	};
	useEffect(() => {
		const theme = localStorage.getItem('theme');
		const body = document.body;
		body.classList.add(theme);
		return () => {
			body.classList.remove(theme);
		};
	}, [mode]);
	const bgCss = mode === 'light' ? classes.lightBg : classes.darkBg;

	const modeCss =
		mode === 'light'
			? classes.light
			: mode === 'dark'
			? classes.dark
			: classes.light;

	console.log(mode);
	return (
		<div className={`${classes.buttonBox} ${bgCss}`}>
			<div className={`${classes.active} ${modeCss}`}></div>
			<div className={classes.iconBox}>
				<RiSunLine onClick={darkHandler} className={classes.icon} />
			</div>
			<div className={classes.iconBox}>
				<RiMoonLine onClick={lightHandler} className={classes.icon} />
			</div>
		</div>
	);
};

export default DarkMode;
