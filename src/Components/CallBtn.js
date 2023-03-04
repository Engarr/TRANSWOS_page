import React from 'react';
import classes from './CallBtn.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';

const CallBtn = () => {
	const handleCall = () => {
		const phoneNumber = '+48608450246';
		window.location.assign(`tel:${phoneNumber}`); 
	};
	return (
		<div className={classes.callBox}>
			<button className={classes.callBtn} onClick={handleCall}>
				<BsFillTelephoneFill className={classes.phoneIcon} />
				<p>608 450 246</p>
			</button>
		</div>
	);
};

export default CallBtn;
