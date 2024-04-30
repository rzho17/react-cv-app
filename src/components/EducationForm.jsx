export default function EducationForm({
  educationData,
  handleEducation,
  setCondition,
}) {
  // date: "",
  // location: "",
  // place: "",
  // title: "",
  // info: "",

  console.log("here is the modified education data");
  console.log(educationData);
  console.log(setCondition);
  return (
    <form action="" className="form--experience">
      <div className="form--start--date">
        <label htmlFor="start--date">Start/End Date</label>
        <input
          id="start--date"
          type="text"
          name="date"
          onChange={(evt) => handleEducation(evt, setCondition)}
          value={educationData.date}
        />
      </div>
      <div className="form--school">
        <label htmlFor="school">
          {setCondition ? "School" : "Company Name"}
        </label>
        <input
          id="school"
          type="text"
          name="place"
          onChange={(evt) => handleEducation(evt, setCondition)}
          value={educationData.place}
        />
      </div>
      <div className="form--degree">
        <label htmlFor="degree">{setCondition ? "Degree" : "Job Title"}</label>
        <input
          id="degree"
          type="text"
          name="title"
          onChange={(evt) => handleEducation(evt, setCondition)}
          value={educationData.title}
        />
      </div>
      <div className="form--location">
        <label htmlFor="location">Location "optional"</label>
        <input
          id="location"
          type="text"
          name="location"
          onChange={(evt) => handleEducation(evt, setCondition)}
          value={educationData.location}
        />
      </div>
      {setCondition === false ? (
        <div className="form--info">
          <label htmlFor="info">Job Description 'optional'</label>
          <textarea
            id="info"
            name="info"
            onChange={(evt) => handleEducation(evt, setCondition)}
            value={educationData.info}
          />
        </div>
      ) : (
        console.log(`edu form condition: ${setCondition}`)
      )}
    </form>
  );
}
