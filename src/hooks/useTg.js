const tg = window.Telegram;

export function useTg(){
    
    const onClose = () =>{
        tg.close()
    }

    const onToggleButton = () =>{
        if(tg.WebApp.MainButton.isVisible){
            tg.WebApp.MainButton.hide();
        }
        else{
            tg.WebApp.MainButton.show();
        }
    }
    
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.WebApp.initDataUnsafe?.user,
    }
}