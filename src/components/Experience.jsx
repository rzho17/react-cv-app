import "../styles/Experience.css";

export default function Experience({ cvTitle, educationData }) {
  return (
    <>
      {cvTitle && <h3 className="cv--description--title">{cvTitle}</h3>}
      <div className="cv--education--container">
        <div className="cv--date">
          <p className="cv--year">{educationData.date}</p>
          <p className="cv--location">{educationData.location}</p>
        </div>
        <div className="cv--info">
          <p className="cv--company">{educationData.place}</p>
          <p className="cv--job-info">{educationData.title}</p>
          {educationData.info && <p>{educationData.info}</p>}
        </div>
      </div>
    </>
  );
}
