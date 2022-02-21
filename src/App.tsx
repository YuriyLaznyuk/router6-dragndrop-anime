import React from 'react';
import {Route, Routes} from 'react-router-dom';
import PostList from './components/PostList';
import Login from './components/Login';
import Profile from './components/Profile';
import Navbar from './components/Navbar/Navbar';
import PostDetails from './components/PostDetails';
import Drag from './pages/Drag/Drag';
import './app.scss';
import DragBoards from './pages/DragBoards/DragBoards';
import DragFile from './pages/DragFile/DragFile';
import Anime from './pages/Anime/Anime';
import CssTransition from './pages/CssTransition/CssTransition';
import SwTransition from './pages/SwTransition/SwTransition';
import TransGroup from './pages/TransGroup/TransGroup';

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<PostList />} />
				<Route path='/login' element={<Login />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/post/:id' element={<PostDetails />} />
				<Route path='/drag' element={<Drag />} />
				<Route path='/boards' element={<DragBoards />} />
				<Route path='/file' element={<DragFile />} />
				<Route path='/anime' element={<Anime />} />
				<Route path='/css-transition' element={<CssTransition />} />
				<Route path='/switch' element={<SwTransition />} />
				<Route path='/group' element={<TransGroup />} />
			</Routes>
		</div>
	);
};

export default App;
