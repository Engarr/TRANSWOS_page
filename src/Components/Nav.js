import React, { useState } from 'react';

import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';
import Modal from './Modal';
import CookieBaner from './CookieBaner';

const Nav = () => {
	const [page, setPage] = useState('');
	const [showMenu, setShowMenu] = useState(false);

	const changePage = (e) => {
		setPage(e.target.textContent);
	};
	const homePage = () => {
		setPage('');
	};

	const navHandler = () => {
		setShowMenu((prev) => (prev = !prev));
	};
	const closeMenuHandler = () => {
		setShowMenu(false);
		setPage('');
	};

	return (
		<div className={classes.navBox}>
			<CookieBaner />
			<div className={classes.mainNav}>
				<div className={classes.logo}>
					<NavLink to='/' onClick={homePage}>
						TRANSWOŚ
					</NavLink>
				</div>
				<GiHamburgerMenu className={classes.burger} onClick={navHandler} />

				{showMenu && (
					<>
					<Modal show={showMenu} closeMenuHandler={closeMenuHandler} />
						<div className={classes.smallPages}>
							<FaWindowClose
								className={classes.close}
								onClick={closeMenuHandler}
							/>
							<NavLink
								to='/'
								onClick={closeMenuHandler}
								className={classes.logoSmall}>
								TRANSWOS
							</NavLink>
							<NavLink to='/'>
								<button onClick={closeMenuHandler}>Strona główna</button>
							</NavLink>

							<NavLink to='/kontakt'>
								<button onClick={closeMenuHandler}>Kontakt</button>
							</NavLink>
						</div>
					</>
				)}

				<div className={classes.bigPages}>
					<NavLink to='/'>
						<button
							onClick={changePage}
							className={page === '' ? classes.active : ''}>
							Strona główna
						</button>
					</NavLink>

					<NavLink to='/kontakt'>
						<button
							onClick={changePage}
							className={page === 'Kontakt' ? classes.active : ''}>
							Kontakt
						</button>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Nav;
