import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Send a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">➤</button>
    </form>
  );
};

export default ChatInput;