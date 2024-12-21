"use client";

import {
  Container,
  Title,
  DetailContainer,
  Detail,
  Content,
  Button,
} from "./styles";

export default function PostPage() {
  return (
    <Container>
      <Title>게시글 제목</Title>
      <DetailContainer>
        <Detail>작성자</Detail>
        <Detail>|</Detail>
        <Detail>작성일</Detail>
      </DetailContainer>
      <Content>여기에 본문 내용이 표시됩니다.</Content>
      <Button>채팅하기</Button>
    </Container>
  );
}
