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
  const [displayBtn, setDisplayBtn] = useState(true);
  const [experienceDisplay, setExperienceDisplay] = useState(true);

  //changes display to hide or show education form
  function changeDisplay() {
    setDisplay((prev) => {
      return !prev;
    });
  }
  function changeExperienceDisplay() {
    setExperienceDisplay((prev) => {
      return !prev;
    });
  }

  function changeDisplayBtn() {
    setDisplayBtn((prev) => {
      return !prev;
    });
  }

  function addNewEducation() {
    addEducation(setCondition);
    changeDisplay();
  }

  function cancel() {
    changeDisplay();
    cancelChanges(setCondition);
  }

  return (
    <div className="educationContainer">
      <div className="education--header">
        <h2>{setCondition ? "Education" : "Experience"}</h2>

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
              setDisplayBtn={changeDisplayBtn}
            />
          )}
          {/* displays form if button is clicked */}
          {display && (
            <EducationForm
              educationData={educationData}
              handleEducation={handleEducation}
              addEducation={addEducation}
              setCondition={setCondition}
            />
          )}

          {/* displays which button set to show / save-cancel/ add */}
          {displayBtn && (
            <div className="buttonContainer">
              {!display && (
                <Button
                  func={addNewEducation}
                  text={setCondition ? "+ Education" : "+ Experience"}
                  name={"add"}
                />
              )}

              {display ? (
                <Button func={cancel} text={"Cancel"} name={"cancel"} />
              ) : null}
              {display ? (
                <Button func={changeDisplay} text={"Save"} name={"save"} />
              ) : null}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
