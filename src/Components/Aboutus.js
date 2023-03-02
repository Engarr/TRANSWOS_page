import React, { useRef } from 'react';
import classes from './Aboutus.module.css';
import { GiCheckMark } from 'react-icons/gi';
import tow from '../asset/tow.png';
import navigation from '../asset/navigation.png';
import safety from '../asset/safety.png';

const Aboutus = () => {
	const aboutUsRef = useRef();

	return (
		<section className={classes.aboutus} id='aboutus' ref={aboutUsRef}>
			<div className={classes.aboutusTextBox}>
				<h2>O nas</h2>
				<p>
					Transwoś to firma specjalizująca się w świadczeniu usług pomocy
					drogowej dla pojazdów maszyn o masie powyżej 14 ton. Firma oferuje
					profesjonalną i kompleksową pomoc na terenie całego kraju. Posiadamy
					sprzęt, który pozwala na przetransportowanie różnego rodzaju maszyn i
					urządzeń.
				</p>
				<p>
					W przypadku awarii czy kolizji, zapewniamy szybką i skuteczną pomoc,
					dostarczając pojazd na wskazane miejsce oraz wykonując niezbędne
					naprawy na miejscu lub przewożąc uszkodzony pojazd do wybranej stacji
					naprawczej.
				</p>
			</div>
			<div className={classes.cardContainer}>
				<div className={classes.cardBox}>
					<div className={classes.image}>
						<img src={tow} className={classes.img} alt='usługa' />
						<div className={classes.more}>
							<p>...</p>
						</div>
					</div>

					<div className={classes.cardTextBox}>
						<h3>Holujemy:</h3>
						<div>
							<GiCheckMark className={classes.icon} />
							<p>Auta osobowe</p>
						</div>
						<div>
							<GiCheckMark className={classes.icon} />
							<p>Auta ciężarowe</p>
						</div>
						<div>
							<GiCheckMark className={classes.icon} />
							<p>Maszyny rolnicze i budowlane</p>
						</div>
					</div>
				</div>
				<div className={classes.cardBox}>
					<div className={classes.image}>
						<img src={navigation} className={classes.img} alt='usługa' />
						<div className={classes.more}>
							<p>...</p>
						</div>
					</div>

					<div className={classes.cardTextBox}>
						<h3>Nasze usługi świadczymy:</h3>
						<div>
							<GiCheckMark className={classes.icon} />
							<p> Na terenie całego kraju</p>
						</div>
					</div>
				</div>
				<div className={classes.cardBox}>
					<div className={classes.image}>
						<img src={safety} className={classes.img} alt='usługa' />
						<div className={classes.more}>
							<p>...</p>
						</div>
					</div>

					<div className={classes.cardTextBox}>
						<h3>Dlaczego my?</h3>
						<div>
							<GiCheckMark className={classes.icon} />
							<p>Posiadamy specjalistyczny sprzęt,</p>
						</div>
						<div>
							<GiCheckMark className={classes.icon} />
							<p>Wykwalifikowany personel,</p>
						</div>
						<div>
							<GiCheckMark className={classes.icon} />
							<p>Zapewnimy Ci bezpieczny i terminowy transport.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Aboutus;
