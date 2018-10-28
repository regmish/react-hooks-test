import React, { useContext, useState } from 'react';
import Store from '../store';

export default (props, context) => {
	const { store, setContext } = useContext(Store);
	const [username, setState] = useState(store.username);
	const inputChanged = ({ target: { value } }) => setState(value);

	const login = (event) => {
		event.preventDefault();
		if (username) {
			setContext({
				...store,
				username
			});
		}
	}
	return (
		<form onSubmit={login}>
			<div className="container" id="login-container">
				<div className="row">
					<label className="col-sm-3 col-form-label" htmlFor="username">Username: </label>
					<input type="text" className="form-control col-sm-9" name="username" id="username" value={username} onChange={inputChanged} />
				</div>
				<div className="row justify-content-md-center" id="login-btn">
					<button type="submit" className="btn btn-info">Login</button>
				</div>
			</div>
		</form>
	);
}