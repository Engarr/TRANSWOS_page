import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './Components/Footer';

function App() {
	return (
		<div className='App'>
			<header>
				<Nav />
			</header>
			<section>
				<Routes>
					<Route path='/' element={<Navigate to='/home' />} />
					<Route path='/home' element={<Home />} />
					<Route path='/kontakt' element={<Contact />} />
				</Routes>
			</section>
			<footer>
				<Footer/>
			</footer>
		</div>
	);
}

export default App;
