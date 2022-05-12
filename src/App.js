import React from 'react';
import './App.css';
import Navbar from './componets';
import Footer from './componets/Footer';
import { BrowserRouter as Router, Routes, Route}
 from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blogs from './pages/blogs';
import Login from './pages/signup';
import Register from './pages/register'
import Contact from './pages/contact';

//import NavbarElements from './componets/NavbarElements';
function App() {
return (
	<Router>
	<Navbar />
	<Footer />
	<Routes>
		<Route exact path='/'  element={<Home />} /> 
		<Route path='/home' element={<Home/>} /> 
		<Route path='/about' element={<About/>} />
		<Route path='/contact' element={<Contact/>} />
		<Route path='/blogs' element={<Blogs/>} />
		<Route path='/sign-in' element={<Login/>} />
		<Route path='/register' element={<Register/>}/>
	</Routes>
	</Router>
	
);
}

export default App;
