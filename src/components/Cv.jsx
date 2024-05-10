import "../styles/Cv.css";
import "../styles/App.css";
import Header from "./Header";
import Experience from "./Experience";
import Skill from "./Skill";
import { nanoid } from "nanoid";

export default function Cv({
  personalFormData,
  educationData,
  experienceData,
  skillData,
  color,
}) {
  return (
    <div className="cv--main">
      <div
        style={{ background: color.color }}
        className="cv--header--line"
      ></div>

      {/* Displays header when data has at least 1 item */}
      <Header personalFormData={personalFormData} color={color} />
      {educationData.length >= 1 ? (
        <h3 style={{ color: color.color }}>Education</h3>
      ) : null}

      {educationData.map((data) => {
        return <Experience key={nanoid()} educationData={data} />;
      })}

      {experienceData.length >= 1 ? (
        <h3 style={{ color: color.color }} className="experienceH3">
          Experience
        </h3>
      ) : null}
      {experienceData.map((data) => {
        // console.log(data);
        return <Experience key={nanoid()} educationData={data} />;
      })}

      {skillData.length >= 1 ? (
        <h3 style={{ color: color.color }} className="experienceH3">
          Skills
        </h3>
      ) : null}

      {skillData.length >= 1 ? (
        <ul className="cv--skills">
          {skillData.map((data) => {
            // console.log(data);
            return <Skill key={nanoid()} skillData={data} name={"skill"} />;
          })}
        </ul>
      ) : null}
    </div>
  );
}
