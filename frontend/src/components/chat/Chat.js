import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSocket from '../chat/hooks/socketConnection'
import Navbar from './components/navbar/Navbar'
import { fetchChats } from '../../store/actions/chat'
import FriendList from './components/friendList/FriendList'
import Messenger from './components/messenger/Messenger'
import './Chat.scss'

const Chat = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)

    useSocket(user, dispatch)

    return (
        <div id='chat-container'>
            <Navbar />
            <div id='chat-wrap'>
                <FriendList />
                <Messenger />
            </div>
        </div>
    );
}

export default Chat
