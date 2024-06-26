import "../styles/Cv.css";
import "../styles/App.css";
import "../styles/Header.css";

export default function Header({ personalFormData, color }) {
  return (
    //displays header info in the CV
    <div className="cv--header--container">
      <h1 className="cv--name">{personalFormData.fullName}</h1>
      <h2 style={{ color: color.color }} className="cv--title">
        {personalFormData.jobTitle}
      </h2>
      <p>{personalFormData.streetName}</p>
      <p>{personalFormData.cityName}</p>
      <p>{personalFormData.phone}</p>
      <p>{personalFormData.email}</p>
    </div>
  );
}
