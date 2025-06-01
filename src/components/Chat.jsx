import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { socketConnection } from '../utils/socket';

const Chat = () => {

    const {targetUserId} = useParams();
    const [messages, setMessages] = useState([{text: 'Hey, How are you?'}]);
    const user = useSelector((store) => store.user);
    const userId = user?._id;

    useEffect(() =>{
        const socket = socketConnection();
        socket.emit ('joinChat',{userId, targetUserId})
    })


    return (
    <div className='w-1/2 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col'>
        <h1 className='p-5 border-b border-gray-600 font-bold text-indigo-700 text-xl'>Chat</h1>
        <div className='flex-1 overflow-scroll p-5'>
            {messages.map((message, index) => {
    return (
        <div key={index} className="chat chat-start">
            <div className="chat-header">
                Astha Ade
                <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble">{message.text}</div>
            <div className="chat-footer opacity-50">Seen</div>
        </div>
    );
})}

    </div>
        <div className='p-5  border-gray-600  flex flex-items-center gap-2'>
        <input className='flex-1 border border-gray-500 rounded p-2'></input>
        <button className='btn btn-secondary'>Send</button>
        </div>
    </div>
    )
}

export default Chat;