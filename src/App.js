import React from 'react';
import { Navigate, Routes, Route, useLocation, Router } from 'react-router-dom';
import { Login, SignUp } from './Modules';

const App = () => {
	const location = useLocation();

	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<SignUp />} />
		</Routes>
	);
};

export default App;
