import "../styles/Cv.css";
import "../styles/App.css";
import "../styles/Header.css";

export default function Header({ props }) {
  return (
    <div className="cv--header--container">
      <h1 className="cv--name">Your Name</h1>
      <h2 className="cv--title">Web Designer</h2>
      <p>123 Your Street</p>
      <p>Your City, ST 12345</p>
      <p>(123) 456-7890</p>
      <p>no_reply@example.com</p>
    </div>
  );
}
