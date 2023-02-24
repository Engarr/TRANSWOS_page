import React, { useState } from 'react';

import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';
import Modal from './Modal';
import CookieBaner from './CookieBaner';
import { GiTireTracks } from 'react-icons/gi';

const Nav = () => {
	const [page, setPage] = useState('Strona główna');
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
						<GiTireTracks className={classes.logoIcon} />
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
								<button onClick={closeMenuHandler}></button>
							</NavLink>

							<NavLink to='/kontakt'>
								<button onClick={closeMenuHandler}>Kontakt</button>
							</NavLink>
						</div>
					</>
				)}

				<div className={classes.bigPages}>
					<div className={page === 'Strona główna' ? classes.active : ''}>
						<NavLink
							to='/'
							onClick={changePage}
							>
							<span></span>
							<span></span>
							<span></span>
							Strona główna
						</NavLink>
					</div>
					<div className={page === 'Kontakt' ? classes.active : ''}>
						<NavLink
							to='/kontakt'
							onClick={changePage}
							>
							<span></span>
							<span></span>
							<span></span>
							Kontakt
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
