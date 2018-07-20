const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/amitheweakest/, (msg, match) => {
  const chatId = msg.chat.id;

  let answer = "Нет. У тебя есть шансы победить.";

  switch (msg.from.username) {
    case "kiriltaran":
      answer = "Ау петух! Ты меня сам создал, зачем спрашивать?";
      break;

    case "oksana_sych":
      answer = "Да, именно ты - наш самый слабый игрок";
      break;
  }

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, answer);
});
