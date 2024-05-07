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
      {/* <div className="cv--header--container">
        <h1 className="cv--name">Your Name</h1>
        <h2 className="cv--title">Web Designer</h2>
        <p>123 Your Street</p>
        <p>Your City, ST 12345</p>
        <p>(123) 456-7890</p>
        <p>no_reply@example.com</p>
      </div> */}
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
      {/* <Experience cvTitle={"Education"} educationData={educationData} /> */}
      {/* <Experience
        cvTitle={"Professional Experience"}
        educationData={experienceData}
      /> */}
      {/* <Experience
        cvTitle="Education"
        cvDate="08/2020 – present"
        cvLocation="Vancouver, British Columbia"
        cvCompany="University of British Columbia"
        cvJob="Bachelors in Economics"
        cvJobInfo=""
      /> */}
      {/* <Experience
        cvTitle="Professional Experience"
        cvDate="08/2020 – present"
        cvLocation="New York City, US"
        cvCompany="Super Real Company"
        cvJob="Web Designer"
        cvJobInfo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
        nostrum possimus quisquam impedit eaque? Incidunt ipsum dolore nobis
        consequuntur exercitationem totam ratione repellendus alias et
        quidem, blanditiis delectus impedit explicabo!"
      /> */}
      {/* <h3 className="cv--description--title">Education</h3>
      <div className="cv--education--container">
        <div className="cv--date">
          <p className="cv--year">08/2020 – present</p>
          <p className="cv--location">New York City, US</p>
        </div>
        <div className="cv--info">
          <p className="cv--company">London City University</p>
          <p className="cv--job-info">Bachelors in Economics</p>
        </div>
      </div> */}
      {/* <h3 className="cv--description--title">Professional Experience</h3>
      <div className="cv--education--container">
        <div className="cv--date">
          <p className="cv--year">08/2020 – present</p>
          <p className="cv--location">New York City, US</p>
        </div>
        <div className="cv--info">
          <p className="cv--company">London City University</p>
          <p className="cv--job-info">Bachelors in Economics</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            nostrum possimus quisquam impedit eaque? Incidunt ipsum dolore nobis
            consequuntur exercitationem totam ratione repellendus alias et
            quidem, blanditiis delectus impedit explicabo!
          </p>
        </div>
      </div> */}
    </div>
  );
}
