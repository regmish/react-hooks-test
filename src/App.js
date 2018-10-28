import React, { useState } from 'react';

import Main from './components/Main';
import StoreContext from './store';
const messages = [
	'Hello, welcome to simple Chat Application',
	'It uses react\'s new hooks ',
	'useState, useContext, useEffect',
	'try typing some text in chat box and hit Enter',
	'it will automatically update the conversation box',
]
export default () => {
	const [store, setContext] = useState({username: '', messages});
	return (
		<StoreContext.Provider value={{store, setContext}}>
			<Main />
		</StoreContext.Provider>
	);
}