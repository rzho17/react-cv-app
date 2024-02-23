import "../styles/Experience.css";

export default function Experience({
  cvTitle,
  cvDate,
  cvLocation,
  cvCompany,
  cvJob,
  cvJobInfo,
}) {
  return (
    <>
      <h3 className="cv--description--title">{cvTitle}</h3>
      <div className="cv--education--container">
        <div className="cv--date">
          <p className="cv--year">{cvDate}</p>
          <p className="cv--location">{cvLocation}</p>
        </div>
        <div className="cv--info">
          <p className="cv--company">{cvCompany}</p>
          <p className="cv--job-info">{cvJob}</p>
          {cvJobInfo && <p>{cvJobInfo}</p>}
        </div>
      </div>
    </>
  );
}
