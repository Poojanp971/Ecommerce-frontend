import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SignUp = () => {
	const params = useParams();
	const navigation = useNavigate();
	console.log(params);
	console.log(window.location.href);
	return (
		<div>
			<h1>This is SignUp Page</h1>
			<button type="submit" onClick={() => navigation(-1)}>
				Submit
			</button>
			<h1>Thanks</h1>
		</div>
	);
};

export default SignUp;
