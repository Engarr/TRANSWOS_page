import React, { useState } from 'react';

import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';
import Modal from './Modal';

const Nav = () => {
	const [page, setPage] = useState('');
	const [showMenu, setShowMenu] = useState(false);

	const changePage = (e) => {
		setPage(e.target.textContent);
	};
	const homePage = () => {
		setPage('Home');
	};

	const navHandler = () => {
		setShowMenu((prev) => (prev = !prev));
	};
	const closeMenuHandler = () => {
		setShowMenu(false);
		setPage('Home');
	};

	return (
		<div className={classes.navBox}>
			<div className={classes.mainNav}>
				<div className={classes.logo}>
					<NavLink to='/home' onClick={homePage}>
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
								to='/home'
								onClick={closeMenuHandler}
								className={classes.logoSmall}>
								TRANSWOS
							</NavLink>
							<NavLink to='/home'>
								<button onClick={closeMenuHandler}>Home</button>
							</NavLink>

							<NavLink to='/kontakt'>
								<button onClick={closeMenuHandler}>Kontakt</button>
							</NavLink>
						</div>
					</>
				)}

				<div className={classes.bigPages}>
					<NavLink to='/home'>
						<button
							onClick={changePage}
							className={page === 'Home' ? classes.active : ''}>
							Home
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
