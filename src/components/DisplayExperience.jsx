import { nanoid } from "nanoid";
import { useState } from "react";
import EducationForm from "./EducationForm";

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

  function handleChange(obj) {
    updateEducation(obj.id);
    changeFormItem();
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
      {display && (
        <EducationForm
          educationData={data}
          handleEducation={updateEducation}
          // addEducation={addEducation}
        />
      )}
    </>
  );
}
