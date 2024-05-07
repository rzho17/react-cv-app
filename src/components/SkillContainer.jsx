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
  function test() {
    console.log("i work in the skillsContainer!");
    setShowDisplay(!showDisplay);
    addSkill();
    console.log(skillData);
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
    console.log(skillData);
  }
  const [showDisplay, setShowDisplay] = useState(false);

  //add the data
  //delete the data

  const [experienceDisplay, setExperienceDisplay] = useState(true);

  function changeExperienceDisplay() {
    // console.log(display);
    setExperienceDisplay((prev) => {
      //   console.log(educationData);
      return !prev;
    });
  }
  return (
    <div className="skillContainer">
      <div className="skillHeader">
        {!showDisplay && <h2>Skills</h2>}
        <form action="" onSubmit={onSubmit} className="skill--form">
          {!showDisplay && (
            <Button
              func={changeExperienceDisplay}
              // text={experienceDisplay ? "hi" : "bye"}
              img={experienceDisplay ? "circle-up.svg" : "circle-down.svg"}
              name={"toggle"}
            />
          )}
          {showDisplay && (
            <div>
              <label htmlFor="skill">Add Skill</label>
              <input
                id="skill"
                type="text"
                name="skill"
                onChange={(evt) => handleSkill(evt, "skill")}
                value={skillData.skill}
                //   onChange={(evt) => handleEducation(evt, setCondition)}
                //   value={educationData.date}
              />
            </div>
          )}
        </form>
      </div>

      {experienceDisplay && (
        <div className="skill--display--place ">
          {!showDisplay && (
            <div className="displayContainer skillDisplayContainer">
              {skillData.map((obj) => (
                <div
                  key={obj.id}
                  className="displaySkill"
                  // onClick={() => handleChange(obj)}
                >
                  {obj.skill}
                  <Button
                    key={obj.id}
                    func={() => deleteItem(obj, "delete")}
                    img={"trash.svg"}
                    name={"trash"}
                    // text={"Delete"}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="buttonContainer">
            {showDisplay === false && (
              <Button func={test} text={"+ Skill"} name={"add"} />
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
