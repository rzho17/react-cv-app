import { useState } from "react";

export default function Form() {
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "",
    streetName: "",
    cityName: "",
    phone: "",
    email: "",
  });

  return (
    <div className="form--container">
      <form action="" className="form--personal">
        <div className="form--name">
          <label htmlFor="fullName">Your Full Name</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={personalFormData.fullName}
          />
        </div>
        <div className="form--address--street">
          <label htmlFor="streetName">Street Addres</label>
          <input
            id="streetName"
            type="text"
            name="streetName"
            value={personalFormData.streetName}
          />
        </div>
        <div className="form--address--city">
          <label htmlFor="cityName">City</label>
          <input
            id="cityName"
            type="text"
            name="cityName"
            value={personalFormData.cityName}
          />
        </div>
        <div className="form--phone">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="text"
            name="phone"
            value={personalFormData.phone}
          />
        </div>
        <div className="form--email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={personalFormData.email}
          />
        </div>
      </form>
    </div>
  );
}
