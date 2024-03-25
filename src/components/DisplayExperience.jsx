import { nanoid } from "nanoid";
import { useState } from "react";
import EducationForm from "./EducationForm";
import Button from "./Button";

export default function DisplayExperience({
  data,
  updateEducation,
  newData,
  updateObj,
}) {
  const [display, setDisplay] = useState(false);

  //changes display to hide or show education form
  function changeFormItem() {
    // console.log(display);
    setDisplay((prev) => {
      //   console.log(educationData);
      return !prev;
    });
  }

  function saveChange() {
    setDisplay(!display);
  }

  //trying to figure out how to send the data of the obj clicked into the form so it can open with it
  //after that need to figure out how to edit the obj with same matching ids
  //then set the original data with the updated obj
  //   const testId = ["asdf", "asdf"];
  const [currentData, setCurrentData] = useState(null);

  function handleChange(obj) {
    // console.log(obj);
    // updateEducation(obj.id);
    // changeFormItem();
    setDisplay(true);
    setCurrentData([obj]);
  }

  return (
    <>
      {data.map((obj) => (
        <button
          key={obj.id}
          className="education--display--place"
          onClick={() => handleChange(obj)}
        >
          {obj.id}
        </button>
      ))}
      {/* {console.log(currentData)} */}
      {/* {console.log("hi")} */}
      {/* i just need to figure out how to send the specific obj with the correct id */}
      {/* {console.log(currentData)} */}
      {display && (
        <EducationForm
          educationData={currentData}
          handleEducation={(evt) => updateEducation(evt, currentData)}
          // addEducation={addEducation}
        />
      )}
      {/* cancel button should take the anychanges made and erase them with the preivous data */}
      {display ? <Button func={saveChange} text={"Cancel"} /> : null}

      {/* save button will simply change the display value from true to false */}
      {display ? <Button func={saveChange} text={"Save"} /> : null}
    </>
  );
}
