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

  function saveChange() {
    setDisplay(!display);
    setDisplayBtn();
  }

  //trying to figure out how to send the data of the obj clicked into the form so it can open with it
  //after that need to figure out how to edit the obj with same matching ids
  //then set the original data with the updated obj
  const [currentData, setCurrentData] = useState(null);

  // changes display and sets data for any changes
  function handleChange(obj) {
    setDisplay(true);
    setCurrentData([obj]);
    setOldEducation(data);
    setDisplayBtn();
  }

  function handleCancel() {
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
      {/* displays all the items in the data as a button to click on them /edit */}
      {display === false && (
        <div className="displayContainer">
          {data.map((obj) => (
            <button
              key={obj.id}
              className="education--display--place"
              onClick={() => handleChange(obj)}
            >
              {obj.place}
            </button>
          ))}
        </div>
      )}

      {/* displays form to change the current item details */}
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
