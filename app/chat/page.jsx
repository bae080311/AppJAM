"use client";

import React, { useState } from "react";
import * as styles from "./styles";
import Image from "next/image";
import Profile from "../svgs/bigprofile.svg";

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요", isSent: false },
    { id: 2, text: "안녕하세요", isSent: true },
    { id: 3, text: "12:00시 이후로 시간 조정 가능할까요?", isSent: true },
    { id: 4, text: "네 가능합니다!!", isSent: false },
    { id: 5, text: "몇 시쯤 가능하세요?", isSent: false },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, isSent: true }]);
      setInput("");
    }
  };

  return (
    <styles.Container>
      <styles.Header>
        <div>←</div>
        <styles.Title>배경진</styles.Title>
      </styles.Header>
      <styles.MessageList>
        {messages.map((msg) => (
          <styles.MessageItem key={msg.id} isSent={msg.isSent}>
            <Image src={Profile} alt="avatar" />
            <styles.MessageBubble isSent={msg.isSent}>
              {msg.text}
            </styles.MessageBubble>
          </styles.MessageItem>
        ))}
      </styles.MessageList>
      <styles.InputContainer>
        <styles.Input
          placeholder="메시지를 보내보세요!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <styles.Button onClick={handleSend}>→</styles.Button>
      </styles.InputContainer>
    </styles.Container>
  );
};

export default Chat;
