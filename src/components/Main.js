import React, { useContext } from 'react';

import Login from './Login';
import Chat from './Chat';

import Store from '../store';

export default () => {
	const { store } = useContext(Store);
	return (
		store.username ? <Chat/> : <Login/>
	);
}