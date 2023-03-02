import React from 'react';
import classes from './CallBtn.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';

const CallBtn = () => {
	return (
		<div className={classes.callBox}>
			<button className={classes.callBtn}>
				<BsFillTelephoneFill className={classes.phoneIcon} />
				<p>608 450 246</p>
			</button>
		</div>
	);
};

export default CallBtn;
