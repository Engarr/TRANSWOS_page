import React, {useRef, useEffect}
from 'react';
import classes from './CallBtn.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';

const CallBtn = () => {
	// const callBtnRef = useRef(null);
  
	// useEffect(() => {
	//   const callBtn = callBtnRef.current;
	//   const maxTilt = 25;
	//   const speed = 400;
	//   let startX, startY;
  
	//   const handleMouseMove = (event) => {
	// 	const rect = callBtn.getBoundingClientRect();
	// 	const centerX = rect.left + rect.width / 2;
	// 	const centerY = rect.top + rect.height / 2;
	// 	const deltaX = event.clientX - centerX;
	// 	const deltaY = event.clientY - centerY;
	// 	const angleX = (deltaY / centerY) * maxTilt;
	// 	const angleY = -(deltaX / centerX) * maxTilt;
  
	// 	callBtn.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
	//   };
  
	//   const handleMouseLeave = () => {
	// 	callBtn.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
	//   };
  
	//   const handleMouseDown = (event) => {
	// 	startX = event.clientX;
	// 	startY = event.clientY;
	//   };
  
	//   const handleMouseUp = (event) => {
	// 	const endX = event.clientX;
	// 	const endY = event.clientY;
	// 	const deltaX = Math.abs(startX - endX);
	// 	const deltaY = Math.abs(startY - endY);
	// 	if (deltaX < 5 && deltaY < 5) {
	// 	  window.location.href = 'tel:608 450 246';
	// 	}
	//   };
  
	//   callBtn.addEventListener('mousemove', handleMouseMove);
	//   callBtn.addEventListener('mouseleave', handleMouseLeave);
	//   callBtn.addEventListener('mousedown', handleMouseDown);
	//   callBtn.addEventListener('mouseup', handleMouseUp);
  
	//   return () => {
	// 	callBtn.removeEventListener('mousemove', handleMouseMove);
	// 	callBtn.removeEventListener('mouseleave', handleMouseLeave);
	// 	callBtn.removeEventListener('mousedown', handleMouseDown);
	// 	callBtn.removeEventListener('mouseup', handleMouseUp);
	//   };
	// }, []);

	return (
		<div className={classes.callBox}>
		<button className={classes.callBtn} 
		// ref={callBtnRef}
		>
		  <BsFillTelephoneFill />
		  <p>608 450 246</p>
		</button>
	  </div>
	);
};

export default CallBtn;
