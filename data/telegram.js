import TelegramBot from 'node-telegram-bot-api';

export const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true,
});

export function initTelegramBot() {
  bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, msg.chat.id);
    console.log(msg.chat.id);
  });
}
