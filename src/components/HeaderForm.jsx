import "../styles/HeaderForm.css";

export default function HeaderForm({ formData, handleChange }) {
  return (
    //takes form info for the header section
    <form action="" className="form--personal">
      <h2 className="form--header">Personal Details</h2>
      <div className="form--name">
        <label htmlFor="fullName">Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
        />
      </div>
      <div className="form--address--street">
        <label htmlFor="streetName">Street Address</label>
        <input
          id="streetName"
          type="text"
          name="streetName"
          onChange={handleChange}
          value={formData.streetName}
        />
      </div>
      <div className="form--address--city">
        <label htmlFor="cityName">City</label>
        <input
          id="cityName"
          type="text"
          name="cityName"
          onChange={handleChange}
          value={formData.cityName}
        />
      </div>
      <div className="form--phone">
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      <div className="form--email">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
    </form>
  );
}
