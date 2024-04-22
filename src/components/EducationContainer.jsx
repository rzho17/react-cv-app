import { useState } from "react";
import Button from "./Button";
import EducationForm from "./EducationForm";
import DisplayExperience from "./DisplayExperience";

import "../styles/EducationContainer.css";
import "../styles/HeaderForm.css";

export default function EducationContainer({
  educationData,
  handleEducation,
  addEducation,
  updateEducation,
  cancelChanges,
  cancelEdit,
  setOldEducation,
  deleteItem,
  setCondition,
}) {
  const [display, setDisplay] = useState(false);
  const [experienceDisplay, setExperienceDisplay] = useState(false);

  //changes display to hide or show education form
  function changeDisplay() {
    // console.log(display);
    setDisplay((prev) => {
      //   console.log(educationData);
      return !prev;
    });
  }
  function changeExperienceDisplay() {
    // console.log(display);
    setExperienceDisplay((prev) => {
      //   console.log(educationData);
      return !prev;
    });
  }

  function addNewEducation() {
    addEducation(setCondition);
    changeDisplay();
  }

  function cancel() {
    console.log("here is the data before cancel");
    console.log(educationData);
    changeDisplay();
    cancelChanges(setCondition);
    console.log("after cancel");
    console.log(educationData);
  }

  return (
    <div className="educationContainer">
      <div className="education--header">
        <h2>{setCondition ? "Education" : "Experience"}</h2>

        {/* {<Button func={changeExperienceDisplay} text={"Display Form"} />} */}
        {
          <Button
            func={changeExperienceDisplay}
            // text={experienceDisplay ? "hi" : "bye"}
            img={experienceDisplay ? "circle-up.svg" : "circle-down.svg"}
            name={"toggle"}
          />
        }
      </div>

      {/* displays section  */}
      {experienceDisplay && (
        <div className="education--experience">
          {/* displays list of experience only on the add section */}
          {!display && (
            <DisplayExperience
              data={educationData}
              updateEducation={updateEducation}
              cancelEdit={cancelEdit}
              setOldEducation={setOldEducation}
              deleteItem={deleteItem}
              setCondition={setCondition}
            />
          )}
          {/* displays form if button is clicked */}
          {display && (
            <EducationForm
              educationData={educationData}
              handleEducation={handleEducation}
              addEducation={addEducation}
              condition={setCondition}
            />
          )}

          <div className="buttonContainer">
            {!display && (
              <Button
                func={addNewEducation}
                text={setCondition ? "Add Education" : "Add Experience"}
              />
            )}

            {display ? <Button func={cancel} text={"Cancel"} /> : null}
            {display ? <Button func={changeDisplay} text={"Save"} /> : null}
          </div>
        </div>
      )}
    </div>
  );
}
