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
      />

      {/* <Button text={"asdfasd"} /> */}
    </div>
  );
}
