import React, { useState, useEffect } from 'react';
import classes from '../style/Galery.module.css';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images', false));

const Galery = () => {
	// const ImageQty = Math.floor(images.length / 2);
	const [activeIndex, setActiveIndex] = useState(0);

	const indexhandlerOnClick = (e) => {
		setActiveIndex(e.target.alt);
		console.log(activeIndex);
	};
	useEffect(() => {
		
	}, []);

	return (
		<div className={classes.mainContainer}>
			<div className={classes.bigImage}>
				<img
					src={images[activeIndex]}
					alt={'zdjęcie główne'}
					className={classes.mainPhoto}
				/>
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
