import React from 'react';
import {Link} from 'react-router-dom';
const {v4: uuidv4} = require('uuid');
import './navbar.scss';

const links = [
	{to: '/', title: 'Home', class: 'navbar-link'},
	{to: '/login', title: 'Login', class: 'navbar-link'},
	{to: '/drag', title: 'Drag', class: 'navbar-link'},
	{to: '/boards', title: 'Boards Drag', class: 'navbar-link'},
	{to: '/file', title: 'File Drag', class: 'navbar-link'},
	{to: '/anime', title: 'Anime', class: 'navbar-link'},
	{to: '/css-transition', title: 'CSSTransition', class: 'navbar-link'},
	{to: '/switch', title: 'SwitchTransition', class: 'navbar-link'},
	{to: '/group', title: 'TransitionGroup', class: 'navbar-link'},
];

const Navbar = () => {
	return (
		<div className='navbar'>
			{links.map((link) => (
				<Link key={uuidv4()} className={link.class} to={link.to}>
					{link.title}
				</Link>
			))}
		</div>
	);
};

export default Navbar;
