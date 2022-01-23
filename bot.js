var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '?') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Commands: help, ping, credits, morestuff, add, random. Note that all commands must be started with ?'
                });
            break;
			case 'annoy':
				bot.sendMessage({
					to: channelID,
					message: '@everyone I was ordered to annoy'
				});
			break;
            case 'stuff':
                bot.sendMessage({
                    to: channelID,
                    message: 'Stuff: lucière, espadrille, soulier: all is relative'
                })
            break;
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'pong'
                })
            break;
            case 'credits':
                bot.sendMessage({
                    to: channelID,
                    message: 'Paul Dannoot: litterally everything'
                })
            break;
            case 'morestuff':
                bot.sendMessage({
                    to: channelID,
                    message: 'IDK post suggestions for the bot in the suggestions channel.'
                })
            case 'add':
                bot.sendMessage({
                    to: channelID,
                    message: 'Add me to your server using: '
                })
            // Just add any case commands if you want to.
         }
     }
});