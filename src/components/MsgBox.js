import React, { useContext, useState } from 'react';

import Store from '../store';

const scrollBottom = () => {
	document.getElementById('conversations').scrollTop = document.getElementById('conversations').scrollHeight;
};
export default () => {
	const { store, setContext } = useContext(Store);
	const [msg, setState] = useState('');

	const inputChanged = ({ target: { value } }) => setState(value);
	const send = (event) => {
		if (event.key === 'Enter') {
			const { messages } = store;
			messages.push(msg);
			setContext({
				...store,
				messages
			});
			setState('');
			scrollBottom();
		}
	};

	return (
		<input className="form-control" id="msg-box" value={msg} onChange={inputChanged} onKeyPress={send}></input>
	)
}