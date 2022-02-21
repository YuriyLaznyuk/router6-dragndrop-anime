import PostList from '../components/PostList';
import Login from '../components/Login';
import Profile from '../components/Profile';
import PostDetails from '../components/PostDetails';
import Drag from '../pages/Drag/Drag';
import DragBoards from '../pages/DragBoards/DragBoards';
import DragFile from '../pages/DragFile/DragFile';
import Anime from '../pages/Anime/Anime';
import CssTransition from '../pages/CssTransition/CssTransition';
import SwTransition from '../pages/SwTransition/SwTransition';
import TransGroup from '../pages/TransGroup/TransGroup';
import ChangePage from '../pages/ChangePage/ChangePage';
import React from 'react';

export const routes = [
	{path: '/', element: <PostList />},
	{path: '/login', element: <Login />},
	{path: '/profile', element: <Profile />},
	{path: '/post/:id', element: <PostDetails />},
	{path: '/drag', element: <Drag />},
	{path: '/boards', element: <DragBoards />},
	{path: '/file', element: <DragFile />},
	{path: '/anime', element: <Anime />},
	{path: '/css-transition', element: <CssTransition />},
	{path: '/switch', element: <SwTransition />},
	{path: '/group', element: <TransGroup />},
	{path: '/page', element: <ChangePage />},
];
