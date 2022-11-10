import React, { useState, useCallback, useEffect } from 'react';

import useWebSocket, { ReadyState } from 'react-use-websocket';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export default function Chatbot() {
    const [socketUrl, setSocketUrl] = useState('ws://127.0.0.1:8000');
    const [text, setText] = useState([])

    const [messageHistory, setMessageHistory] = useState([]);
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

    // console.log(readyState)
    // console.log(text)
    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage));
        }
    }, [lastMessage, setMessageHistory]);

    const handleClickChangeSocketUrl = useCallback(
        () => setSocketUrl('ws://127.0.0.1:8000'),
        []
    );


    const handleClickSendMessage = () => sendMessage(JSON.stringify({ message: text }));


    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];


    const handleChange = (event) => {
        setText(event.target.value);
    };

    return(
        <>
        <span>The WebSocket is currently {connectionStatus}</span>
        {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
        <ul>
          {messageHistory.map((message, idx) => (<>
            <span key={idx}>{message ? message.data : null}<br/></span>
          </>
          ))}
        </ul>

        <TextField
          id="outlined-multiline-static"
          label="message"
          multiline
          rows={10}
          variant="outlined"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleClickSendMessage} disabled={readyState !== ReadyState.OPEN}>send</Button>
        </>
    )

}
