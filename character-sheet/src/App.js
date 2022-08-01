import { useState } from "react"
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import CharacterSheetHeader from "./pages/CharacterSheet/components/CharacterSheetHeader";
import CharacterSheetMain from "./pages/CharacterSheet/components/CharacterSheetMain";
import EditSheet from "./pages/EditSheet";
import "./styles.css"

export default function App() {

  const initialCharacter = {
    name: "Sai",
    gender: "Male",
    race: "Goliath",
    class: "Druid",
    level: 5,
    str: 1,
    dex: 1,
    con: 1,
    int: 1,
    wis: 1,
    cha: 1,
    currentHp: 1,
    maxHp: 1,
    tempHp: 1,
    ac: 1,
    initiative: 1,
    speed: 1,
    defences: "",
    conditions: ""
  }

  const [character, setCharacter] = useState(initialCharacter)

  const d4 = [1, 2, 3, 4]
  const d6 = [1, 2, 3, 4, 5, 6]
  const d8 = [1, 2, 3, 4, 5, 6, 7, 8]
  const d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  const diceRoll = (dice) => {

    const roll = dice[Math.floor(Math.random()*dice.length)]

    console.log("roll", roll)

    return roll
 }

//  onClick={() => { diceRoll(d12) }}

  return (
    <>
      <CharacterSheetHeader character={character} setCharacter={setCharacter}/>
      <CharacterSheetMain character={character} setCharacter={setCharacter}/>
      <Routes>
        {/* <Route path="/" element={<CharacterSheet />}/> */}
        <Route path="/edit" element={<EditSheet character={character} setCharacter={setCharacter}/>} />
      </Routes>
    </>
  )
}