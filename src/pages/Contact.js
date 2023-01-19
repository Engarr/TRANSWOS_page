import React from 'react';
import classes from '../style/Contact.module.css';
import Footer from '../Components/Footer';
import CallBtn from '../Components/CallBtn';

const Contact = () => {
	return (
		<div className={classes.contactBox}>
			<div className={classes.dataBox}>
				<h1> USŁUGI TRANSPORTOWE - POMOC DROGOWA</h1>
				<h2> Transwoś Stanisław Woś</h2>
				<p>Orły ul. Lipowa 88</p>
				<p>37-716 Orły</p>

				<CallBtn />
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
			<Footer />
		</div>
	);
};

export default Contact;
