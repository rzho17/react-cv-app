import { nanoid } from "nanoid";
import { useState } from "react";
import EducationForm from "./EducationForm";
import Button from "./Button";

// import "../styles/EducationContainer.css";

export default function DisplayExperience({
  data,
  updateEducation,
  cancelEdit,
  setOldEducation,
  deleteItem,
  setCondition,
  setDisplayBtn,
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
    setDisplayBtn();
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
    setOldEducation(data);
    setDisplayBtn();
    // cancelEdit(data);
  }

  function handleCancel(obj) {
    cancelEdit(setCondition);
    setDisplay(!display);
    setDisplayBtn();
  }

  function handleDelete(obj) {
    deleteItem(obj, setCondition);
    setDisplay(!display);
    setDisplayBtn();
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
          handleEducation={(evt) =>
            updateEducation(evt, currentData, setCondition)
          }
          setCondition={setCondition}
          // addEducation={addEducation}
        />
      )}

      {/* displays the buttons only when the item is clicked to be edited */}
      {display && (
        <div className="editButtonContainer">
          {display ? (
            <Button
              func={() => handleDelete(currentData)}
              text={"Delete"}
              name={"delete"}
            />
          ) : null}

          {/* cancel button should take the anychanges made and erase them with the preivous data */}
          <div className="mainButtons">
            {display ? (
              <Button
                func={() => handleCancel(data)}
                text={"Cancel"}
                name={"cancel"}
              />
            ) : null}
            {/* save button will simply change the display value from true to false */}
            {display ? (
              <Button func={saveChange} text={"Save"} name={"save"} />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}
