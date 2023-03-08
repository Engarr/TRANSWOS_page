import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import classes from '../style/ErrorPgae.module.css';

const ErrorPage = () => {
	return (
		<div>
			<Nav />
			<main className={classes.main}>
				<h2>Error 404</h2>
				<p>Strona nie istnieje</p>
				<Link to='/'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Wróć do strony głównej
				</Link>
			</main>
		</div>
	);
};

export default ErrorPage;
