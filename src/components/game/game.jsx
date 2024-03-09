import { useEffect } from "react";
import "./game.css"
import {useTg} from "../../hooks/useTg"

const Game = ()=>{

    const {tg, onToggleButton} = useTg();
    
    useEffect(()=>{
        tg?.WebApp?.onEvent('mainButtonClicked', function(){
            tg.WebApp.sendData("some string that we need to send"); 
        });
    });

    return(
        <div>
            <p>Game</p>
            <a href="/">lobby</a>
            <button onclick={onToggleButton} className="button">active</button>
        </div>
    )
}

export default Game;