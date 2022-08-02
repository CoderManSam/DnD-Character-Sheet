import { Link } from "react-router-dom"

function EditCharacterSheetHeader(props) {

  const {character, setCharacter} = props

//   NEXT STEP WOULD BE TO ADD INPUT FIELDS AND FUNCTIONS TO SETCHARACTER TO UPDATE STATE
//    STEP AFTER THAT WOULD BE CSS/REFACTORING/ADDING NEXT PORTION OF SHEET

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
        <li>Initiative: {character.initiative}</li>
        <li>Walking Speed: {character.speed}ft</li>
        <li>Defences: {character.defences}</li>
        <li>Conditions: {character.conditions}</li>
      </ul>
      <Link to="/">Read-only</Link>
    </header>
  )
}

export default EditCharacterSheetHeader