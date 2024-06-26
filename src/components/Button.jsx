import "../styles/Button.css";

export default function Button({ func, text, img, name }) {
  const imageSrc = `/assets/${img}`;
  return (
    <button className={name} onClick={func}>
      {text}
      {!text && <img src={imageSrc} alt="" />}
    </button>
  );
}
