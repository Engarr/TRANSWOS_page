import React, { useState, useEffect } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import classes from '../style/Galery.module.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images', false));

const Galery = () => {
	// const ImageQty = Math.floor(images.length / 2);
	const [activeIndex, setActiveIndex] = useState(0);

	const imgLength = images.length - 1;

	const indexhandlerOnClick = (e) => {
		setActiveIndex(e.target.alt);
		console.log(activeIndex);
	};

	const indexHandlerRight = (e) => {
		if (activeIndex >= 0) {
			setActiveIndex((prev) => prev + 1);
		}
		if (activeIndex === imgLength) {
			setActiveIndex(0);
		}
	};
	const indexHandlerLeft = () => {
		if (activeIndex > 0) {
			setActiveIndex((prev) => prev - 1);
		}
		if (activeIndex === 0) {
			setActiveIndex(imgLength);
		}
	};

	return (
		<div className={classes.mainContainer}>
			<div className={classes.bigImage}>
				<div className={classes.mainPhotoBox}>
					<div className={classes.switchBtnLeft} onClick={indexHandlerLeft}>
						<GoArrowLeft className={classes.icon} />
					</div>
					<img
						src={images[activeIndex]}
						alt={'zdjęcie główne'}
						className={classes.mainPhoto}
					/>
					<div className={classes.switchBtnRight} onClick={indexHandlerRight}>
						<GoArrowRight className={classes.icon} />
					</div>
				</div>
			</div>
			<div className={classes.imagesContainer}>
				{images.map((image, index) => (
					<div className={classes.imageBox}>
						{activeIndex === index ? (
							<img
								key={index}
								src={image}
								alt={`${index}`}
								className={`${classes.image} ${classes.active}`}
								onClick={indexhandlerOnClick}
							/>
						) : (
							<img
								key={index}
								src={image}
								alt={`${index}`}
								className={`${classes.image}`}
								onClick={indexhandlerOnClick}
							/>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Galery;
