import { useRouter } from "next/navigation";
import styles from "./styles";

export default function Post({ post }) {
  const route = useRouter();
  return (
    <styles.Container
      onClick={() => {
        route.push(`/post/${post.id}`);
      }}
    >
      <styles.date>{post.date}</styles.date> {/* createdAt -> date로 변경 */}
      <styles.titleContainer>
        <styles.menu>{post.content}</styles.menu>{" "}
        {/* menuName -> content로 변경 */}
        <styles.meal>({post.mealTime})</styles.meal>
      </styles.titleContainer>
      <styles.category>
        <span>{post.author?.name}. </span>{" "}
        {/* author 객체가 있을 경우에만 접근 */}
        <span>{post.author?.age}. </span>{" "}
        {/* author 객체가 있을 경우에만 접근 */}
        <span>{post.location}</span>
      </styles.category>
    </styles.Container>
  );
}
