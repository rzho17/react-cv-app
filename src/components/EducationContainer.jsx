import { useState } from "react";
import Button from "./Button";
import EducationForm from "./EducationForm";
import DisplayExperience from "./DisplayExperience";

import "../styles/EducationContainer.css";

export default function EducationContainer({
  educationData,
  handleEducation,
  addEducation,
  updateEducation,
  cancelChanges,
}) {
  const [display, setDisplay] = useState(false);

  //changes display to hide or show education form
  function changeDisplay() {
    // console.log(display);
    setDisplay((prev) => {
      //   console.log(educationData);
      return !prev;
    });
  }

  function addNewEducation() {
    addEducation();
    changeDisplay();
  }

  function cancel() {
    console.log("here is the data before cancel");
    console.log(educationData);
    changeDisplay();
    cancelChanges();
    console.log("after cancel");
    console.log(educationData);
  }

  return (
    <div className="educationContainer">
      <h2>Education</h2>

      {!display && <Button func={changeDisplay} text={"Display Form"} />}
      <DisplayExperience
        data={educationData}
        updateEducation={updateEducation}
      />
      {/* displays form if button is clicked */}
      {display && (
        <EducationForm
          educationData={educationData}
          handleEducation={handleEducation}
          addEducation={addEducation}
        />
      )}

      {!display && <Button func={addNewEducation} text={"Add Education"} />}

      {display ? <Button func={cancel} text={"Cancel"} /> : null}
      {display ? <Button func={changeDisplay} text={"Save"} /> : null}
    </div>
  );
}
