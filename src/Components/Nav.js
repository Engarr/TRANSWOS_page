import React, { useState } from 'react';

import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaWindowClose } from 'react-icons/fa';
import Modal from './Modal';
import { useStateContext } from '../context/StateContext';

import CookieBaner from './CookieBaner';
import { GiTireTracks } from 'react-icons/gi';

const Nav = () => {
	const [page, setPage] = useState('Strona główna');
	const [showMenu, setShowMenu] = useState(false);

	const { scrollPosition } = useStateContext();
	console.log(scrollPosition);

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

	const logoCss = scrollPosition < 886 ? classes.logo : classes.logoScrollDown;
	const iconCss =
		scrollPosition < 886 ? classes.logoIcon : classes.logoIconScrollDown;
	const activeCss =
		scrollPosition < 886 ? classes.active : classes.activeScrollDown;
	const navColor =
		scrollPosition < 886 ? classes.navColor : classes.navColorScrollDown;

	return (
		<div className={classes.navBox}>
			<CookieBaner />
			<div className={classes.mainNav}>
				<div className={logoCss}>
					<NavLink to='/' onClick={homePage}>
						<GiTireTracks className={iconCss} />
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
					<div className={page === 'Strona główna' ? activeCss : navColor}>
						<NavLink to='/' onClick={changePage}>
							<span></span>
							<span></span>
							<span></span>
							Strona główna
						</NavLink>
					</div>
					<div className={page === 'Kontakt' ? activeCss : navColor}>
						<NavLink to='/kontakt' onClick={changePage}>
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
