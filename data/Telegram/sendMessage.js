import TelegramBot from 'node-telegram-bot-api';

import { getMessageTemplate } from 'data/Telegram';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true,
});

export const sendMessage = async (user) => {
  await bot.sendMessage(
    process.env.TELEGRAM_ADMIN_ID,
    getMessageTemplate(user, user?.carProperties)
  );
};
