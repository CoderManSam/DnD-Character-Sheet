function CharacterSheetMain(props) {

  const {character} = props

  return (
    <main>
        <section className="dice-rolls">
            <button>d4</button>
            <button>d6</button>
            <button>d8</button>
            <button>d10</button>
            <button>d12</button>
            <button>d20</button>
            <button className="dice-log">log</button>
        </section>
        <section className="base-stats">
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
            <h3></h3>
        </section>
        <section className="stats-abilities-skills">
            <div className="saving-throws"></div>
            <div className="senses"></div>
            <div className="proficiencies-langauges"></div>
            <div className="skills"></div>
        </section>
        <section className="other-pages">

        </section>
    </main>
  )
}

export default CharacterSheetMain