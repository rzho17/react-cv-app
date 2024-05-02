import { useState } from "react";
import Button from "./Button";
export default function SkillContainer({ skillData, addSkill, handleSkill }) {
  function test() {
    console.log("i work in the skillsContainer!");
    setShowDisplay(!showDisplay);
    addSkill();
    console.log(skillData);
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
      <form action="">
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
      {showDisplay && (
        <Button func={save} text={"Save Skill"} name={"saveSkill"} />
      )}
    </div>
  );
}
