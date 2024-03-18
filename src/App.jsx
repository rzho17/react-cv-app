import { useState } from "react";
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

function App() {
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "",
    streetName: "",
    cityName: "",
    phone: "",
    email: "",
  });

  //data will be an array of objects
  //when the user clicks add an education
  //it will add an empty object to the array
  // the user can then input the info into that object in the array
  const [educationData, setEducationData] = useState([
    {
      // type: "",
      date: "",
      location: "",
      place: "",
      title: "",
      info: "",
    },
  ]);

  const [experienceData, setExperienceData] = useState({
    type: "",
    date: "",
    location: "",
    place: "",
    title: "",
    info: "",
  });

  function handleChange(evt) {
    setPersonalFormData((prevData) => {
      return {
        ...prevData,
        [evt.target.name]: evt.target.value,
      };
    });
  }

  function handleEducation(evt) {
    setEducationData((prevData) => {
      const lastIndex = prevData.length - 1;

      const newData = [...prevData];

      newData[lastIndex] = {
        ...newData[lastIndex],
        [evt.target.name]: evt.target.value,
      };
      return newData;
    });
  }

  // function handleEducation(evt) {
  //   setEducationData((prevData) => {
  //     const lastIndex = prevData.length - 1;
  //     // const newData = [...prevData];

  //     // newData[lastIndex] =
  //     const newData = [...prevData];
  //     // Update the last object in the array with the new value
  //     newData[lastIndex] = {
  //       ...newData[lastIndex],
  //       [evt.target.name]: evt.target.value,
  //     };
  //     // Return the updated array
  //     return newData;
  //   });
  // }

  function addEducation() {
    const test = {
      date: "",
      location: "",
      place: "",
      title: "",
      info: "",
    };
    setEducationData((prevData) => {
      return [...prevData, test];
    });
  }

  return (
    <main>
      <Form
        formData={personalFormData}
        handleChange={handleChange}
        educationData={educationData}
        handleEducation={handleEducation}
        addEducation={addEducation}
      />
      <Cv
        personalFormData={personalFormData}
        educationData={educationData}
        experienceData={experienceData}
      />
    </main>
  );
}

export default App;
