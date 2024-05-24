import dotenv from 'dotenv';
import TelegramBot from 'node-telegram-bot-api';
import {publicIpv4} from 'public-ip';
import cron from 'node-cron';

dotenv.config();

// Get the bot token and chat ID from environment variables
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(botToken, {polling: true});

let currentIp = '';

cron.schedule('*/5 * * * *', async () => {
    console.log(currentIp);

    if (lastIp !== '' && lastIp !== currentIp) {
        bot.sendMessage(chatId, `IP address has changed from ${lastIp} to ${currentIp}`);
    }

    lastIp = currentIp;
});

bot.onText(/\/ip/, async (msg) => {
    let currentIp = await publicIpv4();
    bot.sendMessage(msg.chat.id, `Current IP address is ${currentIp}`);
});

publicIpv4().then(ip => {
    currentIp = ip;
    bot.sendMessage(chatId, `iptrackerbot online on ${currentIp}!`);
});