"use client";

import { Container, TopBar, ChatContainer, Name } from "./styles";
import profile from "../svgs/bigprofile.svg";
import Image from "next/image";

export default function ChatList() {
  return (
    <Container>
      <TopBar>채팅</TopBar>
      <ChatContainer>
        <Image src={profile} alt="profile" />
        <Name>배경진</Name>
      </ChatContainer>
      <ChatContainer>
        <Image src={profile} alt="profile" />
        <Name>배경진</Name>
      </ChatContainer>
      <ChatContainer>
        <Image src={profile} alt="profile" />
        <Name>배경진</Name>
      </ChatContainer>
    </Container>
  );
}
