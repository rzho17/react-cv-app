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
          <label htmlFor=""></label>
          <input type="text" name="fullName" />
        </div>
        <div className="form--address--street">
          <label htmlFor=""></label>
          <input type="text" name="streetName" />
        </div>
        <div className="form--address--city">
          <label htmlFor=""></label>
          <input type="text" name="cityName" />
        </div>
        <div className="form--phone">
          <label htmlFor=""></label>
          <input type="text" name="phone" />
        </div>
        <div className="form--email">
          <label htmlFor=""></label>
          <input type="text" name="email" />
        </div>
      </form>
    </div>
  );
}
