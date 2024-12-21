import Image from "next/image";
import profile from "../../svgs/bigprofile.svg";

export default function ChatList() {
  return (
    <ChatContainer>
      <Image src={profile} alt="profile" />
      <Name>배경진</Name>
    </ChatContainer>
  );
}
