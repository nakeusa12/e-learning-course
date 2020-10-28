import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import './main.scss';
import Footer from './components/Footer/Footer';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<>
			<Router>
				<Header />
				<div className='page-container'>
					<Switch>
						<Route path='/auth' exact>
							<Auth />
						</Route>
						<Route path='/product' exact>
							<ProductDetail />
						</Route>
						<Route path='/' exact>
							<LandingPage />
						</Route>
					</Switch>
				</div>
				<Footer />
			</Router>
		</>
	);
}

export default App;
