import React from 'react';
import image from '../asset/img-one.jpg';
import classes from './Aboutus.module.css';
import { GiCheckMark } from 'react-icons/gi';
import CallBtn from './CallBtn';

const Aboutus = () => {
	return (
		<div className={classes.aboutus}>
			<div className={classes.aboutusBox}>
				<img src={image} alt='laweta' className={classes.image} />
				<div className={classes.textBox}>
					<h2>O nas</h2>

					<div className={classes.markBox}>
						<div className={classes.markBgc}>
							<GiCheckMark className={classes.mark} />
						</div>

						<p>
							Firma Transwoś oferuje profesjonalne usługi transportowe do 14 ton
						</p>
					</div>

					<div className={classes.markBox}>
						<div className={classes.markBgc}>
							<GiCheckMark className={classes.mark} />
						</div>

						<p>
							Posiadamy specjalistyczny sprzęt, a także wykwalifikowany
							personel, dzięki czemu jesteśmy w stanie zapewnić bezpieczny i
							terminowy transport.
						</p>
					</div>
					<div className={classes.markBox}>
						<div className={classes.markBgc}>
							<GiCheckMark className={classes.mark} />
						</div>

						<p>
							Przewozimy sprzęt taki jak: maszyny budowlane, sprzęt rolniczy,
							itp.
						</p>
					</div>
					<div className={classes.markBox}>
						<div className={classes.markBgc}>
							<GiCheckMark className={classes.mark} />
						</div>

						<p>Obsługujemy klientów na terenie całego kraju.</p>
					</div>
					<CallBtn />
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
