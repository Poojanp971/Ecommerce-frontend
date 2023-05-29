import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const navigation = useNavigate();
	console.log('login');

	const [request, setRequest] = useState([{}]);
	useEffect(() => {
		fetch('/api')
			.then((response = response.json()))
			.then((data) => {
				setRequest(data);
			});
	}, []);

	return (
		<div>
			<h1>This is Login Page</h1>
			<button
				onClick={() => {
					navigation('/signup');
				}}
			>
				Hello
			</button>
		</div>
	);
};

export default Login;
