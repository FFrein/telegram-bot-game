import "./game.css"

const Game = ()=>{
    const {ononToggleButtonTo} = require("../../hooks/useTg");
    return(
        <div>
            <p>Game</p>
            <a href="/">lobby</a>
            <button onclick={ononToggleButtonTo} className="button">active</button>
        </div>
    )
}

export default Game;