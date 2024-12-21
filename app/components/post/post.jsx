import styles from "./styles";

export default function Post() {
  return (
    <styles.Container>
      <styles.date>12 . 21</styles.date>
      <styles.titleContainer>
        <styles.menu>파스타</styles.menu>
        <styles.meal>(양식)</styles.meal>
      </styles.titleContainer>
      <styles.category>
        <span>닉네임. </span>
        <span>나이. </span>
        <span>성별. </span>
        <span>광주</span>
      </styles.category>
    </styles.Container>
  );
}
