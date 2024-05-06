import { useState } from "react";
import Button from "./Button";
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

  function handleSkillChange() {}
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
  return (
    <div className="skillContainer">
      <h2>Skills</h2>

      {showDisplay === false && (
        <div className="displayContainer">
          {skillData.map((obj) => (
            <div
              key={obj.id}
              className="education--display--place"
              // onClick={() => handleChange(obj)}
            >
              {obj.skill}
              <Button
                key={obj.id}
                func={() => deleteItem(obj, "delete")}
                text={"Delete"}
              />
            </div>
          ))}
        </div>
      )}
      <form action="" onSubmit={onSubmit}>
        {showDisplay && (
          <div>
            <label htmlFor="skill">Add a skill</label>
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

      {showDisplay === false && (
        <Button func={test} text={"Add Skill"} name={"saveSkill"} />
      )}

      {showDisplay && <Button func={cancel} text={"Cancel"} name={"cancel"} />}
      {showDisplay && <Button func={save} text={"Save Skill"} name={"save"} />}
    </div>
  );
}
