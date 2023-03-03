import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookie from './pages/Cookie';

function App() {
	return (
		<div className='App'>
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
		</div>
	);
}

export default App;
