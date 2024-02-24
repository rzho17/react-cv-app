export default function HeaderForm({ formData, handleChange }) {
  console.log(formData);
  return (
    <form action="" className="form--personal">
      <div className="form--name">
        <label htmlFor="fullName">Your Full Name</label>
        <input
          id="fullName"
          type="text"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
        />
      </div>
      <div className="form--address--street">
        <label htmlFor="streetName">Street Addres</label>
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
