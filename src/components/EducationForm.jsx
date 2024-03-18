export default function EducationForm({ educationData, handleEducation }) {
  // date: "",
  // location: "",
  // place: "",
  // title: "",
  // info: "",

  console.log(educationData);
  return (
    <form action="" className="form--experience">
      <div className="form--start--date">
        <label htmlFor="start--date">Date</label>
        <input
          id="start--date"
          type="text"
          name="date"
          onChange={handleEducation}
          value={educationData.date}
        />
      </div>
      <div className="form--location">
        <label htmlFor="location">Location "optional"</label>
        <input
          id="location"
          type="text"
          name="location"
          onChange={handleEducation}
          value={educationData.location}
        />
      </div>
      <div className="form--school">
        <label htmlFor="school">School</label>
        <input
          id="school"
          type="text"
          name="place"
          onChange={handleEducation}
          value={educationData.place}
        />
      </div>
      <div className="form--degree">
        <label htmlFor="degree">Degree</label>
        <input
          id="degree"
          type="text"
          name="title"
          onChange={handleEducation}
          value={educationData.title}
        />
      </div>
    </form>
  );
}
