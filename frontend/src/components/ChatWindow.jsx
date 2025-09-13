import { useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, role: "user", content: "Hello!" },
    { id: 2, role: "assistant", content: "Hi there! How can I help you today?" },
  ]);

  const sendMessage = (text) => {
    const newMsg = { id: Date.now(), role: "user", content: text };
    setMessages([...messages, newMsg]);
    // later → call backend API here
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg) => (
          <Message key={msg.id} role={msg.role} content={msg.content} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatWindow;
