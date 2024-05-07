export default function Skill({ skillData, name }) {
  return <li className={name}>{skillData.skill}</li>;
}
