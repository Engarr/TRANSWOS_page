import React, { createContext, useContext, useEffect, useState } from 'react';
const Context = createContext();

export const StateContext = ({ children }) => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		function handleScroll() {
			const position = window.pageYOffset;
			setScrollPosition(position);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [scrollPosition]);

	return (
		<Context.Provider value={{ scrollPosition }}>{children}</Context.Provider>
	);
};
export const useStateContext = () => useContext(Context);
