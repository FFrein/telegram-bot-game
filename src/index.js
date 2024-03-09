// server.js
require('dotenv').config();
const TelegramBot = require("node-telegram-bot-api");

const token = process.env.token;
const webAppUrl = "https://telegram-bot-game.onrender.com/";
const bot = new TelegramBot(token, { polling: true });

bot.on('web_app_data', async (msg) => {
    const chatId = msg.chat.id;
    console.log("web_app_data");

    // Отправка ответа в чат
    await bot.sendMessage(chatId, 'web_app_data Спасибо за нажатие кнопки!');
});

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    console.log("message");

    if (text === '/start') {
        await bot.sendMessage(chatId, 'ok', {
            reply_markup: {
                keyboard: [
                    [{ text: 'Сайт', web_app: { url: webAppUrl } }]
                ]
            }
        });
    } else {
        await bot.sendMessage(chatId, "Received your message");
    }
});

//Web Site

const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer( (req, res) => {
    if (req.url === '/html') {
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
//для заупска сервера(что бы он слушал входящие соединения)
server.listen(PORT, () => console.log('Server started on PORT ' + PORT));