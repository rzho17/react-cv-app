export default function EducationForm({
  educationData,
  handleEducation,
  setCondition,
}) {
  return (
    // basic form that takes in input from the user and sets the value to a state based on the values given
    <form action="" className="form--experience">
      <div className="form--start--date">
        <label htmlFor="start--date">Start/End Date</label>
        <input
          id="start--date"
          type="text"
          name="date"
          onChange={(evt) => handleEducation(evt, setCondition)}
          value={educationData.date}
          placeholder={educationData.length > 0 ? educationData[0].date : null}
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
          placeholder={educationData.length > 0 ? educationData[0].place : null}
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
          placeholder={educationData.length > 0 ? educationData[0].title : null}
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
          placeholder={
            educationData.length > 0 ? educationData[0].location : null
          }
        />
      </div>
      {setCondition === false ? (
        <div className="form--info">
          <label htmlFor="info">Job Description (optional)</label>
          <textarea
            id="info"
            name="info"
            onChange={(evt) => handleEducation(evt, setCondition)}
            value={educationData.info}
            placeholder={
              educationData.length > 0 ? educationData[0].info : null
            }
          />
        </div>
      ) : null}
    </form>
  );
}
