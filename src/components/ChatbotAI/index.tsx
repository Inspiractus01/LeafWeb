import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillCaretRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import BotAvatarImage from "./groot.jpg";

const ChatbotContainer = styled.div`
  background-color: #2ab96b;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChatWindow = styled.div`
  background-color: #363434;
  border-radius: 10px;
  width: 90%;
  height: 80%;
  overflow-y: scroll;
  padding: 20px;
  /* Style the scrollbar */
  &::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #2ab96b;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #363434;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const MessageContainer = styled.div`
  font-family: "Regular-R";
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  font-family: "Regular-R";
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const UserMessage = styled(Message)`
  align-self: flex-end;
  background-color: #2ab96b;
`;

const BotMessage = styled(Message)`
  align-self: flex-start;
  background-color: #155c35;
`;

const InputContainer = styled.div`
  margin-bottom: 1%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const InputField = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const SendButton = styled(motion.button)`
  background-color: #ffffff;
  color: #2ab96b;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const BotAvatar = styled.img`
  width: 40px; // Adjust the size as needed
  height: 40px; // Adjust the size as needed
  border-radius: 50%; // Ensures a circular avatar
  margin-left: 10px; // Adjust the spacing between the avatar and the message
`;

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState("");

  const chatWindowRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  };


  const sendMessage = async () => {
    if (input.trim() !== "") {
      const newMessage = { text: input, fromUser: true };
      setMessages((prevState) => [...prevState, newMessage]);
      setInput("");

      try {
        const response = await fetch("https://api.leafloop.wiki/chatbot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: input, userId: userId }), // Poslať userID spolu s správou
        });

        if (!response.ok) {
          throw new Error("Failed to fetch response from chatbot");
        }

        const data = await response.json();
        const botMessage = { text: data.text, fromUser: false };
        setMessages((prevState) => [...prevState, botMessage]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <ChatbotContainer>
      <ChatWindow ref={chatWindowRef}>
        <MessageContainer>
          <BotAvatar src={BotAvatarImage} alt="Bot Avatar" />
          <BotMessage>
            {" "}
            Ahoj! Ako ti môžem pomôcť dnes? Máš nejaké otázky ohľadom rastlín
            alebo niečo iné, čo ťa zaujíma? Som tu, aby som ti pomohol!
          </BotMessage>
          {messages.map((message, index) =>
            message.fromUser ? (
              <UserMessage key={index}>{message.text}</UserMessage>
            ) : (
              <BotMessage key={index}>{message.text}</BotMessage>
            )
          )}
        </MessageContainer>
      </ChatWindow>
      <InputContainer>
        <InputField
          type="text"
          placeholder="Napíš tvoju otázku"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <IconContext.Provider value={{ size: "1.5em" }}>
          <AiFillCaretRight />
        </IconContext.Provider>
      </InputContainer>
    </ChatbotContainer>
  );
};

export default Chatbot;
