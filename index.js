require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.token;
const webAppUrl = "https://telegram-bot-game.onrender.com/";
const bot = new TelegramBot(token, { polling: true });

bot.on('mainButtonClicked', async (msg) => {
    const chatId = msg.chat.id;
    console.log("mainButtonClicked2");

    // Отправка ответа в чат
    await bot.sendMessage(chatId, 'mainButtonClicked Спасибо за нажатие кнопки!');
  });

bot.on('web_app_data', async (msg) => {
    const chatId = msg.chat.id;
    console.log("mainButtonClicked3");

    // Отправка ответа в чат
    await bot.sendMessage(chatId, 'web_app_data Спасибо за нажатие кнопки!');
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log("message");

    if(msg?.web_app_data){
        try{
            bot.sendMessage(chatId, "message ход обработан");
            console.log("ход обработан");
        }catch(e){
            console.log(e);
        }
    }

    if (text === '/start') {
        await bot.sendMessage(chatId,'ok',{
            reply_markup: {
                keyboard: [
                    [{ text: 'Сайт' , web_app: {url:webAppUrl}}]
                ]
            }
        });
    } else {
        await bot.sendMessage(chatId, "Received your message");
    }
    
});

//сайт
const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 5000;

const server = http.createServer( (req, res) => {
    if (req.url === '/') {
        try {
            fs.readFile('index.html', 'utf8',function(err,html){
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(html);
            });
            
        } catch (err) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    }
    else{
        res.end(req.url);
    }
});
server.listen(PORT, () => console.log('Server started on PORT ' + PORT));