import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookie from './pages/Cookie';
// import Footer from './Components/Footer';
function App() {
	return (
		<div className='app'>
			<header>
				<Nav />
			</header>
			<main>
				<Routes>
					<Route element={<Navigate to='/' />} />
					<Route path='/*' element={<Navigate to='/' />} />
					<Route path='/' element={<Home />} />
					<Route path='/kontakt' element={<Contact />} />
					<Route path='/polityka' element={<Cookie />} />
				</Routes>
			</main>
			{/* <footer>
				<Footer />
			</footer> */}
		</div>
	);
}

export default App;
