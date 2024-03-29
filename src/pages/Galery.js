import React, { useState } from 'react';
// import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

import { MdOutlineClose } from 'react-icons/md';
import { GrNext, GrPrevious } from 'react-icons/gr';
import classes from '../style/Galery.module.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images', false));

const Galery = () => {
	// const ImageQty = Math.floor(images.length / 2);
	const [activeIndex, setActiveIndex] = useState(0);
	const [zoomed, setZoomed] = useState(false);

	const imgLength = images.length - 1;

	const indexhandlerOnClick = (e) => {
		const index = Number(e.target.dataset.index);
		setActiveIndex(index);
		switchPhoto();
	};

	const switchPhoto = () => {
		const photo = document.querySelector(`.${classes.mainPhoto}`);
		const animationClass = `${classes.show}`;

		photo.classList.remove(animationClass);
		setTimeout(() => {
			photo.classList.add(animationClass);
		}, 10);
	};

	const indexHandlerRight = (e) => {
		e.stopPropagation();
		if (activeIndex >= 0) {
			setActiveIndex((prev) => prev + 1);
			switchPhoto();
		}
		if (activeIndex === imgLength) {
			setActiveIndex(0);
			switchPhoto();
		}
	};
	const indexHandlerLeft = (e) => {
		e.stopPropagation();
		if (activeIndex > 0) {
			setActiveIndex((prev) => prev - 1);
			switchPhoto();
		}
		if (activeIndex === 0) {
			setActiveIndex(imgLength);
			switchPhoto();
		}
	};
	const zoomHandler = (e) => {
		e.stopPropagation();
		setZoomed((prev) => !prev);
	};

	return (
		<>
			{zoomed && (
				<div className={classes.zoomedBg} onClick={zoomHandler}>
					<div>
						<div className={classes.closeBox}>
							<MdOutlineClose
								className={classes.closeIcon}
								onClick={zoomHandler}
							/>
						</div>
						<div onClick={indexHandlerLeft} className={classes.prevBox}>
							<GrPrevious className={classes.zoomedIconPrev} />
						</div>
						<img
							src={images[activeIndex]}
							alt={'zdjęcie główne'}
							className={`${classes.zoomedImg} ${classes.show}`}
							onClick={(e) => e.stopPropagation()}
						/>
						<div onClick={indexHandlerRight} className={classes.nextBox}>
							<GrNext className={classes.zoomedIconNext} />
						</div>
					</div>
				</div>
			)}
			<div className={classes.mainContainer}>
				<div className={classes.bigImage}>
					<div className={classes.mainPhotoBox}>
						<div className={classes.switchBtnLeft} onClick={indexHandlerLeft}>
							<GrPrevious className={classes.icon} />
						</div>

						<img
							src={images[activeIndex]}
							alt={'zdjęcie główne'}
							className={`${classes.mainPhoto}  ${classes.show} `}
							onClick={zoomHandler}
						/>
						<div className={classes.switchBtnRight} onClick={indexHandlerRight}>
							<GrNext className={classes.icon} />
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
									data-index={index}
									className={`${classes.image} ${classes.active}`}
									onClick={indexhandlerOnClick}
								/>
							) : (
								<img
									key={index}
									src={image}
									data-index={index}
									alt={`${index}`}
									className={`${classes.image}`}
									onClick={indexhandlerOnClick}
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Galery;
