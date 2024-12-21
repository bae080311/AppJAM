import Buttons from "./styles";

export default function Button({ label, onClick }) {
  return <Buttons onClick={onClick}>{label}</Buttons>;
}
