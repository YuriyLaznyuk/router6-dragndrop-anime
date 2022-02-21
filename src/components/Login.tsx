import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h2>Login to your account</h2>
			<button onClick={() => navigate('/profile')}>Login</button>
		</div>
	);
};

export default Login;
