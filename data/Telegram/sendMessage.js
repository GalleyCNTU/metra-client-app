import TelegramBot from 'node-telegram-bot-api';

import { getMessageTemplate } from './messageTemplate';

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {
  polling: true,
});

export const sendMessage = async (user) => {
  await bot.sendMessage(
    // process.env.TELEGRAM_ADMIN_ID,
    1002011329,
    getMessageTemplate(user, user?.carProperties)
  );
};
