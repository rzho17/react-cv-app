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
      />

      {/* <Button text={"asdfasd"} /> */}
    </div>
  );
}
