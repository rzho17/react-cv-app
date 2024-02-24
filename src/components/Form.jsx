import { useState } from "react";
import HeaderForm from "./HeaderForm";

export default function Form({ formData, handleChange }) {
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
    </div>
  );
}
