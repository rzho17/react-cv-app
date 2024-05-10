import { useState } from "react";
import Button from "./Button";

import "../styles/SkillContainer.css";
import "../styles/EducationContainer.css";

export default function SkillContainer({
  skillData,
  addSkill,
  handleSkill,
  cancelChanges,
  deleteItem,
}) {
  function add() {
    setShowDisplay(!showDisplay);
    addSkill();
  }
  function onSubmit(evt) {
    evt.preventDefault();
  }

  function cancel() {
    cancelChanges();
    setShowDisplay(!showDisplay);
  }
  function save() {
    setShowDisplay(!showDisplay);
  }
  const [showDisplay, setShowDisplay] = useState(false);

  const [experienceDisplay, setExperienceDisplay] = useState(true);

  function changeExperienceDisplay() {
    setExperienceDisplay((prev) => {
      return !prev;
    });
  }
  return (
    <div className="skillContainer">
      <div className="skillHeader">
        {!showDisplay && <h2>Skills</h2>}
        {!showDisplay && (
          <Button
            func={changeExperienceDisplay}
            img={experienceDisplay ? "circle-up.svg" : "circle-down.svg"}
            name={"toggle"}
          />
        )}
        {showDisplay && (
          <form action="" onSubmit={onSubmit} className="skill--form">
            <div>
              <label htmlFor="skill">Add Skill</label>
              <input
                id="skill"
                type="text"
                name="skill"
                onChange={(evt) => handleSkill(evt, "skill")}
                value={skillData.skill}
              />
            </div>
          </form>
        )}
      </div>

      {experienceDisplay && (
        <div className="skill--display--place ">
          {!showDisplay && (
            <div className="displayContainer skillDisplayContainer">
              {skillData.map((obj) => (
                <div key={obj.id} className="displaySkill">
                  {obj.skill}
                  <Button
                    key={obj.id}
                    func={() => deleteItem(obj, "delete")}
                    img={"trash.svg"}
                    name={"trash"}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="buttonContainer">
            {showDisplay === false && (
              <Button func={add} text={"+ Skill"} name={"add"} />
            )}

            {showDisplay ? (
              <Button func={cancel} text={"Cancel"} name={"cancel"} />
            ) : null}
            {showDisplay ? (
              <Button func={save} text={"Save"} name={"save"} />
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
