import React from 'react';

import Users from './Users';
import Conversations from './Conversations';
import MsgBox from './MsgBox';

export default () => {
    return (
        <div className="container-fluid">
            <div className="row" id="chat-container">
                <div className="col-3">
                    <Users />
                </div>
                <div className="col-9">
                    <Conversations/>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <MsgBox/>
            </div>
        </div>
    )
}