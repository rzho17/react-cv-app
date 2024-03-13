import { useState } from "react";
import HeaderForm from "./HeaderForm";
import EducationForm from "./EducationForm";

export default function Form({
  formData,
  handleChange,
  educationData,
  handleEducation,
}) {
  //   const [personalFormData, setPersonalFormData] = useState({
  //     fullName: "",
  //     streetName: "",
  //     cityName: "",
  //     phone: "",
  //     email: "",
  //   });

  //   function handleChange(evt) {
  //     setPersonalFormData((prevData) => {
  //       return {
  //         ...prevData,
  //         [evt.target.name]: evt.target.value,
  //       };
  //     });
  //   }

  return (
    <div className="form--container">
      <HeaderForm formData={formData} handleChange={handleChange} />
      <EducationForm
        educationData={educationData}
        handleEducation={handleEducation}
      />
    </div>
  );
}
