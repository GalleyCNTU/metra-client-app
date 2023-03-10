import TelegramBot from 'node-telegram-bot-api';

export const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true,
});
// Зберігаємо обробник подій у глобальній змінній
let eventHandler;

// Функція для підписки на обробник подій
const subscribeToEvents = (handler) => {
  // Якщо бот ще не підписаний на обробник, підписуємо його
  if (!eventHandler) {
    bot.on('message', handler);
    eventHandler = handler;
  }
};

// Викликаємо функцію підписки при запуску проекту
subscribeToEvents((msg) => {
  bot.sendMessage(
    msg.chat.id,
    'I will definitely have the opportunity to answer you in the future'
  );
});
