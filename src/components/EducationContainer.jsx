import { useState } from "react";
import Button from "./Button";
import EducationForm from "./EducationForm";

export default function EducationContainer({
  educationData,
  handleEducation,
  addEducation,
}) {
  const [display, setDisplay] = useState(false);

  //   const test = {
  //     // type: "",
  //     date: "123",
  //     location: "bye",
  //     place: "university of brown",
  //     title: "asdflksajd",
  //     info: "",
  //   };

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
      {/* <DisplayExperience data={educationData} /> */}
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

      {display ? <Button func={changeDisplay} text={"cancel"} /> : null}

      {/* {display && (
        <Button changeDisplay={() => addEducation(test)} text={"save"} />
      )} */}
    </div>
  );
}
