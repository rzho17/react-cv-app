import { useEffect, useState } from "react";
import Button from "./components/Button";
import "./styles/App.css";

//Things to do for this project:
// A section to add general information like name, email and phone number.
//create a form to hold these value
//the form will be an onchange value to show each keystroke change
//each change should update the CV

// A section to add your educational experience (school name, title of study and date of study)
//button to add education
//once an education has been added it should be able to be clicked on
//form should ask for school name/degree/start-end date/location
//should change with each onChange
//save button that closes form and brings it back to add button
//delete option that deletes the info and brings it back to add button

// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
//same as education but with job description
//should use a component

//CV section
//create a cv component that takes in data props from the forms
//update the state when there is  a change in the form data

import Cv from "./components/Cv";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import EducationForm from "./components/EducationForm";

function App() {
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "",
    jobTitle: "",
    streetName: "",
    cityName: "",
    phone: "",
    email: "",
  });

  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  function handleChange(evt) {
    setPersonalFormData((prevData) => {
      return {
        ...prevData,
        [evt.target.name]: evt.target.value,
      };
    });
  }

  function handleEducation(evt, condition) {
    let setFunc;

    if (condition === true) {
      setFunc = setEducationData;
    } else if (condition === false) {
      setFunc = setExperienceData;
    } else {
      setFunc = setSkills;
    }

    setFunc((prevData) => {
      const lastIndex = prevData.length - 1;

      const newData = [...prevData];

      //selects the last object in array and updates it
      newData[lastIndex] = {
        ...newData[lastIndex],
        [evt.target.name]: evt.target.value,
      };
      return newData;
    });
  }

  function cancelChanges(cancelCondition) {
    let setFunc;

    if (cancelCondition === true) {
      setFunc = setEducationData;
    } else if (cancelCondition === false) {
      setFunc = setExperienceData;
    } else {
      setFunc = setSkills;
    }

    setFunc((prevData) => {
      const lastIndex = prevData.length - 1;

      const newData = [...prevData].splice(0, lastIndex);

      return newData;
    });
  }

  const [oldEducation, setOldEducation] = useState([]);
  const [oldExperience, setOldExperience] = useState([]);

  function cancelEdit(condition) {
    if (condition) {
      setEducationData(oldEducation);
    } else {
      setExperienceData(oldExperience);
    }
  }

  function deleteItem(obj, condition) {
    const setFunc = condition ? setEducationData : setExperienceData;

    if (condition === "delete") {
      setSkills((prevData) => {
        return prevData.filter((item) => item.id !== obj.id);
      });
    } else {
      setFunc((prevData) => {
        return prevData.filter((item) => item.id !== obj[0].id);
      });
    }
  }

  function addEducation(condition) {
    let setFunc;

    if (condition === true) {
      setFunc = setEducationData;
    } else if (condition === false) {
      setFunc = setExperienceData;
    } else {
      setFunc = setSkills;
    }

    const test = {
      date: "",
      location: "",
      place: "",
      title: "",
      id: nanoid(),
      info: "",
      skill: "",
    };
    setFunc((prevData) => {
      return [...prevData, test];
    });
  }

  function updateEducation(evt, data, condition) {
    const setFunc = condition ? setEducationData : setExperienceData;

    const { name, value } = evt.target;

    setFunc((prevData) => {
      return prevData.map((item) => {
        // console.log(value);
        if (item.id === data[0].id) {
          console.log(data[0]);
          console.log(prevData);
          console.log("same");
          return { ...item, [name]: value };
        }
        return item;
      });
    });
  }

  const educationCondition = true;
  const experienceCondition = false;

  const [color, setColor] = useState({
    color: "#000000",
  });
  function updateColor(item) {
    setColor({ color: item.target.value });
  }

  const cvForm = document.querySelector(".cv--main");

  function printWindow() {
    window.print(cvForm);
  }

  const [skillData, setSkills] = useState([]);

  function setDemo() {
    setPersonalFormData({
      fullName: "Bill Brown",
      jobTitle: "Competitive Eater",
      streetName: "1234 Street Name",
      cityName: "Vancouver",
      phone: "555-555-5555",
      email: "billbrown@resume.com",
    });

    setEducationData([
      {
        date: "2020-2024",
        location: "Vancouver",
        place: "Amazing University",
        title: "Bachelor of Business",
        id: nanoid(),
        info: "",
        skill: "",
      },
    ]);
    setExperienceData([
      {
        date: "2024-Present",
        location: "Vancouver",
        place: "Generic Company Ltd.",
        title: "Account Manager",
        id: nanoid(),
        info: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel perspiciatis neque labore sequi. Dolores ad odit exercitationem hic voluptate saepe nam atque ex magnam. Aut, laboriosam? Dicta est quis ipsum?",
        skill: "",
      },
      {
        date: "2020-2024",
        location: "Vancouver",
        place: "Super Kitchen Inc.",
        title: "Kitchen Manager",
        id: nanoid(),
        info: "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel perspiciatis neque labore sequi. Dolores ad odit exercitationem hic voluptate saepe nam atque ex magnam. Aut, laboriosam? Dicta est quis ipsum?",
        skill: "",
      },
    ]);

    setSkills([
      { id: nanoid(), skill: "Digital Design" },
      { id: nanoid(), skill: "HTML" },
      { id: nanoid(), skill: "CSS" },
      { id: nanoid(), skill: "Javascript" },
      { id: nanoid(), skill: "React" },
      { id: nanoid(), skill: "Detail Oriented" },
      { id: nanoid(), skill: "Critical Thinking" },
      { id: nanoid(), skill: "Teamwork" },
    ]);
  }

  function clearDemo() {
    setPersonalFormData({
      fullName: "",
      jobTitle: "",
      streetName: "",
      cityName: "",
      phone: "",
      email: "",
    });

    setEducationData([]);
    setExperienceData([]);
    setSkills([]);
  }

  return (
    <main>
      <div className="sidebar">
        <div className="sideButtons">
          <Button func={setDemo} text={"Load Demo"} name={"loadButton"} />
          <Button
            func={clearDemo}
            text={"Clear"}
            name={"loadButton clearButton"}
          />
        </div>
        <Form
          formData={personalFormData}
          handleChange={handleChange}
          educationData={educationData}
          handleEducation={handleEducation}
          addEducation={addEducation}
          updateEducation={updateEducation}
          cancelChanges={cancelChanges}
          cancelEdit={cancelEdit}
          setOldEducation={setOldEducation}
          deleteItem={deleteItem}
          experienceData={experienceData}
          setOldExperience={setOldExperience}
          educationCondition={educationCondition}
          experienceCondition={experienceCondition}
          skillData={skillData}
        />
        <div className="sideButtons">
          <input
            className="printButton"
            type="button"
            name=""
            id=""
            value={"Save PDF"}
            onClick={printWindow}
          />
          <input
            style={{ background: color.color, border: color.color }}
            className="colorPicker"
            type="color"
            onChange={(evt) => updateColor(evt)}
            value={color.color}
          />
        </div>
      </div>

      <Cv
        personalFormData={personalFormData}
        educationData={educationData}
        experienceData={experienceData}
        skillData={skillData}
        color={color}
      />
    </main>
  );
}

export default App;
