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
	const closeMenuHandler = (e) => {
		setShowMenu(false);

		setPage(e.target.textContent);
	};

	const logoCss = scrollPosition < 886 ? classes.logo : classes.logoScrollDown;
	const iconCss =
		scrollPosition < 886 ? classes.logoIcon : classes.logoIconScrollDown;
	const activeCss =
		scrollPosition < 886 ? classes.active : classes.activeScrollDown;
	const navColor =
		scrollPosition < 886 ? classes.navColor : classes.navColorScrollDown;
	const navbgColor =
		scrollPosition < 886
			? `${classes.navBox} ${classes.navColorbg}`
			: `${classes.navBox} ${classes.navColorbgScrollDown}`;

	return (
		<div className={navbgColor}>
			<CookieBaner />
			<div className={classes.mainNav}>
				<div className={logoCss}>
					<NavLink to='/' onClick={homePage}>
						<GiTireTracks className={iconCss} />
						TRANSWOŚ
					</NavLink>
				</div>
				<GiHamburgerMenu className={classes.burger} onClick={navHandler} />

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
			{showMenu && (
				<div className={classes.smallPages}>
					<Modal show={showMenu} closeMenuHandler={closeMenuHandler} />
					<div>
						<div className={classes.logoBox}>
							<div>
								<NavLink
									to='/'
									onClick={closeMenuHandler}
									className={classes.logoSmall}>
									{/* <GiTireTracks className={classes.logoIcon} /> */}
									TRANSWOŚ
								</NavLink>
							</div>
							<FaWindowClose
								className={classes.close}
								onClick={closeMenuHandler}
							/>
						</div>

						<div className={classes.linksBox}>
							<div
								className={
									page === 'Strona główna'
										? classes.currentPage
										: classes.inActivePage
								}>
								<NavLink to='/' onClick={closeMenuHandler}>
									Strona główna
								</NavLink>
							</div>

							<div
								className={
									page === 'Kontakt'
										? classes.currentPage
										: classes.inActivePage
								}>
								<NavLink to='/kontakt' onClick={closeMenuHandler}>
									Kontakt
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Nav;
