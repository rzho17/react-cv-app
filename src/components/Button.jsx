export default function Button({ func, text }) {
  return <button onClick={func}>{text}</button>;
}
