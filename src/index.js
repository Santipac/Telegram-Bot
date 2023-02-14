const dotenv = require('dotenv');
dotenv.config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.API_TOKEN);
const config = require('./config/config');
bot.start(ctx => {
  ctx.reply('Que necesitas?');
});

bot.hears(['Portfolio', 'portfolio'], ctx => {
  ctx.reply(config.information.portfolio);
});
bot.hears(['linkedin', 'Linkedin'], ctx => {
  ctx.reply(config.information.linkedin);
});
bot.hears('presentation', ctx => {
  ctx.reply(config.credentials.PRESENTATION);
});
bot.hears('gmail', ctx => {
  ctx.reply(config.credentials.EMAIL).then(message => {
    setTimeout(() => {
      ctx.deleteMessage(message.message_id);
    }, 5000);
  });
});
bot.hears(['Brubank', 'brubank'], ctx => {
  ctx.reply(config.credentials.BRUBANK.ALIAS).then(msg => {
    setTimeout(() => {
      ctx.deleteMessage(msg.message_id);
    }, 5000);
  });
  ctx.reply(config.credentials.BRUBANK.CBU).then(msg => {
    setTimeout(() => {
      ctx.deleteMessage(msg.message_id);
    }, 5000);
  });
});
bot.hears(['BBVA', 'bbva'], ctx => {
  ctx.reply(config.credentials.BBVA.ALIAS).then(msg => {
    setTimeout(() => {
      ctx.deleteMessage(msg.message_id);
    }, 5000);
  });
  ctx.reply(config.credentials.BBVA.CBU).then(msg => {
    setTimeout(() => {
      ctx.deleteMessage(msg.message_id);
    }, 5000);
  });
});
bot.hears(['MP', 'mp'], ctx => {
  ctx.reply(config.credentials.MP.ALIAS).then(msg => {
    setTimeout(() => {
      ctx.deleteMessage(msg.message_id);
    }, 5000);
  });
  ctx.reply(config.credentials.MP.CBU).then(msg => {
    setTimeout(() => {
      ctx.deleteMessage(msg.message_id);
    }, 5000);
  });
});
bot.launch();
