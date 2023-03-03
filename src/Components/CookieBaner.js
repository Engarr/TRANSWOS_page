import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './CookieBaner.module.css';

const CookieBaner = () => {
	const [hide, setHide] = useState(false);

	useEffect(() => {
		const data = localStorage.getItem('hide');
		console.log(data);
		setHide(data);
	}, []);

	const hideBaner = () => {
		setHide(true);
		localStorage.setItem('hide', true);
	};
	return (
		<>
			{!hide && (
				<div className={classes.cookieBaner}>
					<div className={classes.cookieBanerBox}>
						<p>
							W celu poprawy jakości naszych usług, stosujemy na tej stronie
							pliki cookies. Więcej szczegółów na ten temat znajdziesz na
							stronie
							<Link to='/polityka'> :Polityka Prywatności</Link>
						</p>
							<button onClick={hideBaner}>Akceptuje</button>
					</div>
				</div>
			)}
		</>
	);
};

export default CookieBaner;
