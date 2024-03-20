import { useState } from "react";
import Button from "./Button";
import EducationForm from "./EducationForm";
import DisplayExperience from "./DisplayExperience";

export default function EducationContainer({
  educationData,
  handleEducation,
  addEducation,
  updateEducation,
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

  return (
    <div className="educationContainer">
      <h2>Education</h2>
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

      {!display && <Button func={changeDisplay} text={"Display Form"} />}

      {!display && <Button func={addEducation} text={"Add Education"} />}

      {display ? <Button func={changeDisplay} text={"Save"} /> : null}

      {/* {display && (
        <Button changeDisplay={() => addEducation(test)} text={"save"} />
      )} */}
    </div>
  );
}
