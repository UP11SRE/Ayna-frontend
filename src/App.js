
import React, { useState } from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import JoinRoom from './screens/JoinRoom';
import ChatRoom from './screens/ChatRoom';

import { history } from './config/network';
import Register from './screens/Register';
import Login from './screens/Login';

function App() {
    const [username, setUsername] = useState('');
    const [room, setRoom] = useState('');
    const [joinData, setJoinData] = useState({});

    function onJoinSuccess(data) {
        setJoinData(data);
        setUsername(data.userData.username);
        setRoom(data.userData.room);
        history.push(`/chat/rooms/${data.userData.room}`);
    }

    function onRegisterSuccess() {
        history.push(`/login`);
    }

    function onLoginSuccess() {
        history.push(`/join`);
    }

    return (
        <div className="App">
            <Switch>
                <Route
                    path="/join"
                    component={() => <JoinRoom onJoinSuccess={onJoinSuccess}/>}
                />
                <Route
                    path="/register"
                    component={() => <Register onRegisterSuccess={onRegisterSuccess}/>}
                />
                <Route
                    path="/login"
                    component={() => <Login onLoginSuccess={onLoginSuccess}/>}
                />
                <Redirect
                    from="/"
                    to="/login"
                    exact
                />
                <Redirect
                    from="/join"
                    to="/join"
                    exact
                />
                <Route
                    path="/chat/rooms/:roomNumber"
                    component={() =>
                        <ChatRoom
                            username={username}
                            room={room}
                            joinData={joinData}
                        />
                    }
                />
            </Switch>
        </div>
    );
}
export default App;