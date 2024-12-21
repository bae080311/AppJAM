import styles from "./styles";

export default function Post({ post }) {
  return (
    <styles.Container>
      <styles.date>{post.createdAt}</styles.date>
      <styles.titleContainer>
        <styles.menu>{post.menuName}</styles.menu>
        <styles.meal>({post.mealTime})</styles.meal>
      </styles.titleContainer>
      <styles.category>
        <span>{post.author.nickname}. </span>
        <span>{post.author.age}. </span>
        <span>{post.location}</span>
      </styles.category>
    </styles.Container>
  );
}
