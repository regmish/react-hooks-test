import React, { useContext } from 'react';

import Store from '../store';

const Sent = ({ msg }) => {
    return (
        <React.Fragment>
            <li className="sent">
                <p>{msg}</p>
            </li>
        </React.Fragment>
    )
}

const Replies = ({ msg }) => {
    return (
        <React.Fragment>
            <li className="replies">
                <p>{msg}</p>
            </li>
        </React.Fragment>
    )
}
export default () => {
    const { store } = useContext(Store);

    const { messages } = store;

    return (
        <div id="conversations">
            <div className="col-9 align-self-end" id="currentuser">
                <h4>Welcome, {store.username}</h4>
                <hr />
            </div>
            <ul>
                {messages.map((msg, id) => {
                    return (
                        id % 2 === 0 ? <Sent msg={msg} key={id} /> : <Replies msg={msg} key={id} />
                    );
                })}
            </ul>
        </div>
    )
}