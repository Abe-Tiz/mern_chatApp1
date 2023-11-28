import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Chatspage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats =async () => {
        const data = await axios.get("http://localhost:6000/api/chat");
        console.log(data);
        setChats(data);
    }

    useEffect(() => {
        fetchChats();
    }, []);

  return (
    <div>
        chats page 
        {
            chats.map((chat) => {
                <div>{ chat.chatName}</div>
            })
        }
    </div>
  )
}

export default Chatspage