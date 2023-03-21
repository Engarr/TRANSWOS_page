import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookie from './pages/Cookie';
import Galery from './pages/Galery';
import ErrorPage from './pages/ErrorPage';
function App() {
	return (
		<div className='app'>
			<header>
				<Nav />
			</header>
			<main>
				<Routes>
					{/* <Route element={<Navigate to='/' />} /> */}
					<Route path='/' element={<Home />} />
					<Route path='/kontakt' element={<Contact />} />
					<Route path='/polityka' element={<Cookie />} />
					<Route path='/galery' element={<Galery />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
