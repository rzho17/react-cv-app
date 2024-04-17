export default function EducationForm({
  educationData,
  handleEducation,
  condition,
}) {
  // date: "",
  // location: "",
  // place: "",
  // title: "",
  // info: "",

  console.log("here is the modified education data");
  console.log(educationData);
  console.log(condition);
  return (
    <form action="" className="form--experience">
      <div className="form--start--date">
        <label htmlFor="start--date">Start/End Date</label>
        <input
          id="start--date"
          type="text"
          name="date"
          onChange={(evt) => handleEducation(evt, condition)}
          value={educationData.date}
        />
      </div>
      <div className="form--school">
        <label htmlFor="school">{condition ? "School" : "Company Name"}</label>
        <input
          id="school"
          type="text"
          name="place"
          onChange={(evt) => handleEducation(evt, condition)}
          value={educationData.place}
        />
      </div>
      <div className="form--degree">
        <label htmlFor="degree">{condition ? "Degree" : "Job Title"}</label>
        <input
          id="degree"
          type="text"
          name="title"
          onChange={(evt) => handleEducation(evt, condition)}
          value={educationData.title}
        />
      </div>
      <div className="form--location">
        <label htmlFor="location">Location "optional"</label>
        <input
          id="location"
          type="text"
          name="location"
          onChange={(evt) => handleEducation(evt, condition)}
          value={educationData.location}
        />
      </div>
      {!condition && (
        <div className="form--info">
          <label htmlFor="info">Job Description 'optional'</label>
          <textarea
            id="info"
            name="info"
            onChange={(evt) => handleEducation(evt, condition)}
            value={educationData.info}
          />
        </div>
      )}
    </form>
  );
}
