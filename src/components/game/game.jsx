import { useEffect } from "react";
import "./game.css"

const Game = ()=>{

    const {tg, ononToggleButtonTo} = require("../../hooks/useTg");
    
    useEffect(()=>{
        tg?.onEvent('mainButtonClicked', function(){
            tg.sendData("some string that we need to send"); 
        });
    });

    return(
        <div>
            <p>Game</p>
            <a href="/">lobby</a>
            <button onclick={ononToggleButtonTo} className="button">active</button>
        </div>
    )
}

export default Game;