function CharacterSheetMain(props) {

  const {character, initialMods, savingThrows} = props

  const myDice = {
    d4: [1, 2, 3, 4],
    d6: [1, 2, 3, 4, 5, 6],
    d8: [1, 2, 3, 4, 5, 6, 7, 8],
    d10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    d12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    d20: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  }

  const diceRoll = (dice) => {

    const damageDice = myDice[dice]

    const roll = damageDice[Math.floor(Math.random()*damageDice.length)]

    console.log("roll", roll)

    return roll
 }

  return (
    <main>
        <section className="dice-rolls">
            <button onClick={() => { diceRoll("d4") }}>d4</button>
            <button onClick={() => { diceRoll("d6") }}>d6</button>
            <button onClick={() => { diceRoll("d8") }}>d8</button>
            <button onClick={() => { diceRoll("d10") }}>d10</button>
            <button onClick={() => { diceRoll("d12") }}>d12</button>
            <button onClick={() => { diceRoll("d20") }}>d20</button>
            <button className="dice-log">log</button>
        </section>
        <section className="base-stats">
            <h3>Strength: {character.str} ({initialMods.strMod})</h3>
            <h3>Dexterity: {character.dex} ({initialMods.dexMod})</h3>
            <h3>Constitution: {character.con} ({initialMods.conMod})</h3>
            <h3>Intelligence: {character.int } ({initialMods.intMod})</h3>
            <h3>Wisdom: {character.wis} ({initialMods.wisMod})</h3>
            <h3>Charisma: {character.cha} ({initialMods.chaMod})</h3>
        </section>
        <section className="stats-abilities-skills">
            <div className="saving-throws">
                <h3>Saving Throws</h3>
                <p>Str: {savingThrows.strSave}</p>
                <p>Dex: {savingThrows.dexSave}</p>
                <p>Con: {savingThrows.conSave}</p>
                <p>Int: {savingThrows.intSave}</p>
                <p>Wis: {savingThrows.wisSave}</p>
                <p>Cha: {savingThrows.chaSave}</p>
            </div>
            <div className="senses">
                <h3>Senses</h3>
                <p>Passive Perception: {10 + +initialMods.wisMod}</p>
                <p>Passive Investigation: {10 + +initialMods.intMod}</p>
                <p>Passive Insight: {10 + +initialMods.wisMod}</p>
            </div>
            <div className="proficiencies-langauges">
                <h3>Proficiencies and Languages</h3>
                <p>Armour: </p>
                <p>Weapons: </p>
                <p>Tools: </p>
                <p>Languages: </p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    <li>Acrobatics (dex): {initialMods.dexMod}</li>
                    <li>Aniaml Handling (wis): {initialMods.wisMod}</li>
                    <li>Arcana (int): {initialMods.intMod}</li>
                    <li>Athletics (str): {initialMods.strMod}</li>
                    <li>Deception (cha): {initialMods.chaMod}</li>
                    <li>History (int): {initialMods.intMod}</li>
                    <li>insight (wis): {initialMods.wisMod}</li>
                    <li>Intimidation (cha): {initialMods.chaMod}</li>
                    <li>Investigation (int): {initialMods.intMod}</li>
                    <li>Medicine (wis): {initialMods.wisMod}</li>
                    <li>Nature (int): {initialMods.intMod}</li>
                    <li>Perception (wis): {initialMods.wisMod}</li>
                    <li>Performance (cha): {initialMods.chaMod}</li>
                    <li>Persuasion (cha): {initialMods.chaMod}</li>
                    <li>Religion (int): {initialMods.intMod}</li>
                    <li>Sleight of Hand (dex): {initialMods.dexMod}</li>
                    <li>Stealth (dex): {initialMods.dexMod}</li>
                    <li>Survival (wis): {initialMods.wisMod}</li>
                </ul>
            </div>
        </section>
        <section className="other-pages">

        </section>
    </main>
  )
}

export default CharacterSheetMain