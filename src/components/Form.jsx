import { useState } from "react";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";
import Button from "./Button";
import EducationContainer from "./EducationContainer";

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
        setCondition={true}
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
        setCondition={false}
      />

      {/* <Button text={"asdfasd"} /> */}
    </div>
  );
}
