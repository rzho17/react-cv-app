import { useEffect, useState } from "react";
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

  //data will be an array of objects
  //when the user clicks add an education
  //it will add an empty object to the array
  // the user can then input the info into that object in the array

  // const [educationData, setEducationData] = useState([
  //   // trying to see if i can change the data type so i only have education set when it's the first entry
  //   {
  //     type: educationData.length > 0 ? "" : "Education",
  //     date: "",
  //     location: "",
  //     place: "",
  //     title: "",
  //     info: "",
  //   },
  // ]);

  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);
  // useEffect(() => {
  //   setEducationData((prevData) => {
  //     if (prevData.length === 0) {
  //       return [
  //         {
  //           type: "Education",
  //           date: "",
  //           location: "",
  //           place: "",
  //           title: "",
  //           id: nanoid(),
  //           info: "",
  //         },
  //       ];
  //     }
  //     return prevData;
  //   });
  // }),
  //   [];

  // const [experienceData, setExperienceData] = useState({
  //   type: "",
  //   date: "",
  //   location: "",
  //   place: "",
  //   title: "",
  //   info: "",
  // });

  function handleChange(evt) {
    setPersonalFormData((prevData) => {
      return {
        ...prevData,
        [evt.target.name]: evt.target.value,
      };
    });
  }

  function handleEducation(evt, condition) {
    // const setFunc = condition ? setEducationData : setExperienceData;
    console.log(experienceData);

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
    const setFunc = cancelCondition ? setEducationData : setExperienceData;
    setFunc((prevData) => {
      const lastIndex = prevData.length - 1;

      const newData = [...prevData].splice(0, lastIndex);

      return newData;
    });
  }

  const [oldEducation, setOldEducation] = useState([]);
  const [oldExperience, setOldExperience] = useState([]);

  function cancelEdit(condition) {
    console.log(oldEducation);

    // setEducationData(oldEducation);
    // setFunc(data);

    if (condition) {
      setEducationData(oldEducation);
    } else {
      setExperienceData(oldExperience);
    }

    //   //find the current index that is being edited
    //   //save the current index in a value
    //   //when the cancel button is pressed put the current value into the current index
    //   //return the array which should be unedited
    //   return newData;
    // });
  }

  function deleteItem(obj, condition, deleteSkill) {
    console.log(obj);
    const setFunc = condition ? setEducationData : setExperienceData;

    if (deleteSkill === "delete") {
      setSkills((prevData) => {
        return prevData.filter((item) => item.id !== obj[0].id);
      });
    }
    setFunc((prevData) => {
      return prevData.filter((item) => item.id !== obj[0].id);
    });
  }

  function addEducation(condition) {
    console.log(`hre is the condition ${condition}`);
    // const setFunc = condition ? setEducationData : setExperienceData;
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
    //my thought is i need the state to change so i re render the education form
    // const filtered = educationData.filter((item) => item.id === data.id);
    // console.log(educationData.filter((data) => data.id === id));
    // console.log(filtered);

    const setFunc = condition ? setEducationData : setExperienceData;

    console.log("he is the data!");
    console.log(data);
    console.log("typed!");
    console.log(condition);

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

  return (
    <main>
      <div className="sidebar">
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
      </div>

      <Cv
        personalFormData={personalFormData}
        educationData={educationData}
        experienceData={experienceData}
        color={color}
      />
    </main>
  );
}

export default App;
