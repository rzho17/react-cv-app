import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
  return (
    <main>
      <Form />
      <Cv />
    </main>
  );
}

export default App;
