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

    function test2(){
        let tg3 = window.Telegram.WebApp;
        tg3.MainButton.show();
        tg3.MainButton.enable();
        tg3.onEvent('mainButtonClicked', function(){
            tg3.sendData("some string that we need to send"); 
        });
    }

    function test3(){
        let tg2 = window.Telegram.WebApp;
        tg2.sendData("test data");
    }

    return(
        <div>
            <p>Game</p>
            <a href="/">lobby</a>
            <button onclick={onToggleButton} className="button">active</button>
            <button onclick={test2()} className="button">active2</button>
            <button onclick={test3()} className="button">active3</button>
        </div>
    )
}

export default Game;