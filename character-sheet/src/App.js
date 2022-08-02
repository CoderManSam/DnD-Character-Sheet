import { useState } from "react"
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import CharacterSheet from "./pages/CharacterSheet";
import EditSheet from "./pages/EditSheet";
import "./styles.css"

export default function App() {

  const initialCharacter = {
    name: "Sai",
    gender: "Male",
    race: "Goliath",
    class: "Druid",
    level: 5,
    str: 18,
    dex: 16,
    con: 18,
    int: 8,
    wis: 10,
    cha: 8,
    currentHp: 44,
    maxHp: 44,
    tempHp: 0,
    ac: 14,
    initiative: "+3",
    speed: 30,
    defences: "",
    conditions: ""
  }

  const [character, setCharacter] = useState(initialCharacter)

  const modDeterminer = {
    0: "-5",
    1: "-5",
    2: "-4",
    3: "-4",
    4: "-3",
    5: "-3",
    6: "-2",
    7: "-2",
    8: "-1",
    9: "-1",
    10: "+0",
    11: "+0",
    12: "+1",
    13: "+1",
    14: "+2",
    15: "+2", 
    16: "+3",
    17: "+3", 
    18: "+4",
    19: "+4",
    20: "+5",
    21: "+5",
    22: "+6",
    23: "+6",
    24: "+7",
    25: "+7",
    26: "+8",
    27: "+8",
    28: "+9",
    29: "+9",
  }

  const modifierDeterminer = (stat) => {

    const statValue = character[stat]  
  
    const modValue = modDeterminer[statValue]
    
    return modValue 
  }  

  const initialMods = {
    strMod: modifierDeterminer("str"),
    dexMod: modifierDeterminer("dex"),
    conMod: modifierDeterminer("con"),
    intMod: modifierDeterminer("int"),
    wisMod: modifierDeterminer("wis"),
    chaMod: modifierDeterminer("cha")
  }

  const savingThrows = {
    strSave: initialMods["strMod"],
    dexSave: initialMods["dexMod"],
    conSave: initialMods["conMod"],
    intSave: initialMods["intMod"],
    wisSave: initialMods["wisMod"],
    chaSave: initialMods["chaMod"]
  }

  return (
    <>
      {/* elements outside of the routes placed here will load in every page, if characterSheet is added here it'll load twice */}
      <Routes>
        <Route path="/" element={<CharacterSheet character={character} setCharacter={setCharacter} initialMods={initialMods} savingThrows={savingThrows}/>}/>
        <Route path="/edit" element={<EditSheet character={character} setCharacter={setCharacter} initialMods={initialMods} savingThrows={savingThrows}/>} />
      </Routes>
    </>
  )
}