import { Link } from "react-router-dom"

function CharacterSheetHeader(props) {

  const {character} = props

  return (
    <header className="character-header">
      <div className="character-header--top">
        <img alt="avatar" src=""></img>
        <h1>{character.name}</h1>
        <h2>{character.gender} {character.race} {character.class}</h2>
        <h3>Level {character.level}</h3>
      </div>
      <ul>
        <li>Current HP: {character.currentHp}</li>
        <li>Max HP: {character.maxHp}</li>
        <li>Temp HP: {character.tempHp}</li>
        <li>AC: {character.ac}</li>
        <li>Initiative: +{character.initiative}</li>
        <li>Walking Speed: {character.speed}ft</li>
        <li>Defences: {character.defences}</li>
        <li>Conditions: {character.conditions}</li>
        <li>Proficiency Bonus: +{character.prof}</li>
      </ul>
      <Link to="/edit">Edit</Link>
    </header>
  )
}

export default CharacterSheetHeader