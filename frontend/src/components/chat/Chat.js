import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSocket from './hooks/socketConnect'
import Navbar from './components/navbar/Navbar'
import './Chat.scss'

const Chat = () => {

    return (
        <div id='chat-container'>
            <Navbar />
        </div>
    );
}

export default Chat