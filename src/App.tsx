import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
const {v4: uuidv4} = require('uuid');
import {routes} from './routes/routes';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './app.scss';

const App = () => {
	const location = useLocation();
	return (
		<div>
			<Navbar />
			<TransitionGroup component={null}>
				<CSSTransition key={location.key} classNames='fade' timeout={300}>
					<Routes>
						{routes.map((route) => (
							<Route key={uuidv4()} path={route.path} element={route.element} />
						))}
					</Routes>
				</CSSTransition>
			</TransitionGroup>
		</div>
	);
};

export default App;
