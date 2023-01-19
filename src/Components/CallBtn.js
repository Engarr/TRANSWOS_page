import React from 'react';
import classes from './CallBtn.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';

const CallBtn = () => {
	const callHandler = () => {
		window.location.href = 'tel:608 450 246';
	};
	return (
		<div className={classes.callBox}>
			<button className={classes.callBtn} onClick={callHandler}>
				<BsFillTelephoneFill />
				<p> 608 450 246</p>
			</button>
		</div>
	);
};

export default CallBtn;
