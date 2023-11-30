import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatspage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = () => {
      axios
        .get("http://localhost:4000/api/chat")
        .then((response) => {
          const responseData = response.data;  
          console.log(responseData);
          setChats(responseData);
        })
        .catch((error) => {
          // Handle error
          console.error("AxiosError:", error);
        });
    };

    fetchChats();
  }, []);

  return (
    <div>
      Chats page
      {chats.map((chat) => (
        <div key={chat.chatId}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chatspage;
