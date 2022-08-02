import CharacterSheetHeader from "./components/CharacterSheetHeader";
import CharacterSheetMain from "./components/CharacterSheetMain";

function CharacterSheet(props) {

  const {character, setCharacter, initialMods, savingThrows} = props

  return (
    <section>
      <CharacterSheetHeader character={character} setCharacter={setCharacter}/>
      <CharacterSheetMain character={character} setCharacter={setCharacter} initialMods={initialMods} savingThrows={savingThrows}/>
    </section>
  )
}

export default CharacterSheet