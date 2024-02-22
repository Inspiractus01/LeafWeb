import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AiFillCaretRight } from "react-icons/ai";
import { IconContext } from "react-icons";
import Cookies from "js-cookie"; // Importuj modul Cookies

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
  background-color: #ffffff;
  border-radius: 10px;
  width: 50%;
  height: 70%;
  overflow-y: scroll;
  padding: 20px;
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
  margin-bottom:100px;
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

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // Získať užívateľské ID z cookies
    const storedUserId = Cookies.get("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      // Ak neexistuje, vytvorte nové ID a uložte ho do cookies
      const newUserId = generateUserId();
      setUserId(newUserId);
      Cookies.set("userId", newUserId);
    }

    // Načítanie správ chatu z cookies
    const storedMessages = Cookies.get("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    // Uložiť správy chatu do cookies vždy, keď sa zmenia
    Cookies.set("chatMessages", JSON.stringify(messages));
  }, [messages]);

  const generateUserId = () => {
    // Generovanie náhodného užívateľského ID
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
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
      <ChatWindow>
        <MessageContainer>
        <BotMessage> Ahoj! Ako ti môžem pomôcť dnes? Máš nejaké otázky ohľadom rastlín alebo niečo iné, čo ťa zaujíma? Som tu, aby som ti pomohol!</BotMessage>
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
