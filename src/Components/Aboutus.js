import React from 'react';
import image from '../asset/img-one.jpg';
import classes from './Aboutus.module.css';
const Aboutus = () => {
	return (
		<div className={classes.aboutus}>
			<div className={classes.aboutusBox}>
				
					<img src={image} alt='laweta' className={classes.image} />
				
				<div className={classes.textBox}>
					<h2>O nas</h2>
					<p>
						Firma Transwoś oferuje profesjonalne usługi transportowe dla
						przedmiotów powyżej 3,5 tony, takich jak koparki, maszyny budowlane
						i inne. Nasza siedziba znajduje się w Orłach, jednak obsługujemy
						klientów na terenie całego kraju. Posiadamy specjalistyczny sprzęt,
						a także wykwalifikowany personel, dzięki czemu jesteśmy w stanie
						zapewnić bezpieczny i terminowy transport. Jełsi potrzebujesz
						przewieźć duży ładunek zapraszamy do kontaktu
					</p>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
