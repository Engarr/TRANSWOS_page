import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Modal = ({ show, closeMenuHandler }) => {
	
	if (!show) return null;
	return ReactDOM.createPortal(
		<div className={classes.backdrop} onClick={closeMenuHandler}></div>,
		document.getElementById('backdrop')
	);
};

export default Modal;
