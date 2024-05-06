import { useState } from "react";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";
import Button from "./Button";
import EducationContainer from "./EducationContainer";
import SkillContainer from "./SkillContainer";

export default function Form({
  formData,
  handleChange,
  educationData,
  handleEducation,
  addEducation,
  updateEducation,
  cancelChanges,
  cancelEdit,
  setOldEducation,
  deleteItem,
  experienceData,
  setOldExperience,
  educationCondition,
  experienceCondition,
  skillData,
}) {
  return (
    <div className="form--container">
      <HeaderForm formData={formData} handleChange={handleChange} />
      {/* <EducationForm
        educationData={educationData}
        handleEducation={handleEducation}
      /> */}

      <EducationContainer
        educationData={educationData}
        handleEducation={handleEducation}
        addEducation={addEducation}
        updateEducation={updateEducation}
        cancelChanges={cancelChanges}
        cancelEdit={cancelEdit}
        setOldEducation={setOldEducation}
        deleteItem={deleteItem}
        setCondition={educationCondition}
      />

      <EducationContainer
        educationData={experienceData}
        handleEducation={handleEducation}
        addEducation={addEducation}
        updateEducation={updateEducation}
        cancelChanges={cancelChanges}
        cancelEdit={cancelEdit}
        setOldEducation={setOldExperience}
        deleteItem={deleteItem}
        setCondition={experienceCondition}
      />

      <SkillContainer
        skillData={skillData}
        addSkill={addEducation}
        handleSkill={handleEducation}
        cancelChanges={cancelChanges}
        deleteItem={deleteItem}
      />

      {/* <Button text={"asdfasd"} /> */}
    </div>
  );
}
