import React, { useRef } from 'react';
import classes from './Aboutus.module.css';
import { GiCheckMark } from 'react-icons/gi';
import { FaRegHandPointUp } from 'react-icons/fa';
import tow from '../asset/tow.png';
import navigation from '../asset/navigation.png';
import safety from '../asset/safety.png';
import { useStateContext } from '../context/StateContext';

const Aboutus = () => {
	const { scrollPosition } = useStateContext();

	const aboutUsRef = useRef();
	const textRef = useRef();

	const CssText = classes.show;

	if (scrollPosition > 230) {
		textRef.current.classList.add(`${CssText}`);
	}

	return (
		<section className={classes.aboutus} id='aboutus' ref={aboutUsRef}>
			<div className={classes.aboutusTextBox} ref={textRef}>
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
						<FaRegHandPointUp className={classes.hand} />
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
						<FaRegHandPointUp className={classes.hand} />
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
						<FaRegHandPointUp className={classes.hand} />
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
							<p>Bezpieczny i terminowy transport.</p>
						</div>
					</div>
				</div>
			</div>

			<div className={classes.mapBox}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1285.466826826546!2d22.793180188192835!3d49.881272504785315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7d0e285aa50d%3A0xdee8e2b2060d6f06!2sLipowa%2088%2C%2037-716%20Or%C5%82y!5e0!3m2!1spl!2spl!4v1674052585852!5m2!1spl!2spl'
					style={{ border: '0' }}
					title='lokalizacja firmy Transwoś'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
					className={classes.map}></iframe>
			</div>
		</section>
	);
};

export default Aboutus;
