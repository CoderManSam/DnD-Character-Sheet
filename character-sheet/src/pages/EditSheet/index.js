import { useEffect, useState } from "react"
import EditCharacterSheetHeader from "./components/EditCharacterSheetHeader"
import EditCharacterSheetMain from "./components/EditCharacterSheetMain"

function EditSheet(props) {

  const {character, setCharacter, initialMods, savingThrows} = props

  return (
    <section>
        <EditCharacterSheetHeader character={character} setCharacter={setCharacter}/>
        <EditCharacterSheetMain character={character} setCharacter={setCharacter} initialMods={initialMods} savingThrows={savingThrows} />
    </section>
  )
}

export default EditSheet