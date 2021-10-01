const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.';
 
client.once('ready', () =>{
    console.log('Bot jest online! To koks!');
});
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'jej') {
  message.channel.send(' https://cdn.discordapp.com/emojis/833264639830655007.gif?v=1&size=64 ');
    } else if (command === 'nic') {
  message.reply('...');
    } else if (command === 'ankieta') {
        message.react('✅');
                message.channel.send('Zagłosujcie');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'dance') {
  message.channel.send(' https://cdn.discordapp.com/emojis/821324378499055637.gif?v=1&size=64 ');
    } else if (command === 'coś') {
  message.reply('ok ale co?');
    } else if (command === 'ankieta') {
        message.react('❎');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'papuga') {
  message.channel.send(' https://cdn.discordapp.com/emojis/836862733206683711.gif?v=1&size=64 ');
    } else if (command === 'bot siema') {
  message.reply('siemka');
    } else if (command === 'hej') {
        message.react('👋');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'tak') {
  message.channel.send(' https://cdn.discordapp.com/emojis/835053326579924994.gif?v=1&size=64 ');
    } else if (command === 'bot hej') {
  message.reply('hejka');
    } else if (command === 'siema') {
        message.react('👋');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'hehe') {
  message.channel.send(' https://cdn.discordapp.com/emojis/744493329961582652.gif?v=1&size=64 ');
    } else if (command === 'bot co tam?') {
  message.reply('Jestem botem i się czasem nudzę ale gdy z tobą piszę to nudy mi mijają😀');
    } else if (command === 'elo') {
        message.react('👋');
                message.channel.send(' ');
    }
});
 
client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'xd') {
  message.channel.send(' https://cdn.discordapp.com/emojis/761343172906582036.gif?v=1&size=64 ');
    } else if (command === 'bot co u ciebie?') {
  message.reply('a koks życie robota leci xD');
    } else if (command === 'siemka') {
        message.react('👋');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'bruh') {
  message.channel.send(' https://cdn.discordapp.com/emojis/828439283630735360.gif?v=1&size=64 ');
    } else if (command === 'bot super') {
  message.reply('aha to super');
    } else if (command === 'hejka') {
        message.react('👋');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'muted') {
  message.channel.send(' https://cdn.discordapp.com/emojis/828439256216633364.gif?v=1&size=64 ');
    } else if (command === 'bot nara') {
  message.reply('naura😎');
    } else if (command === 'nara') {
        message.react('😎');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'zbanowany') {
  message.channel.send(' https://cdn.discordapp.com/emojis/814945247649595452.gif?v=1&size=64 ');
    } else if (command === 'bot elo') {
  message.reply('el0😎');
    } else if (command === 'pa') {
        message.react('😁');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'like') {
  message.channel.send(' https://cdn.discordapp.com/emojis/805822322123472986.gif?v=1&size=64 ');
    } else if (command === 'bot debil') {
  message.reply('z ciebie jest😎');
    } else if (command === 'nie') {
        message.react('❌');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'loading') {
  message.channel.send(' https://cdn.discordapp.com/emojis/653675901908811776.gif?v=1&size=64 ');
    } else if (command === 'cb głupi jesteś') {
  message.reply('przykro mi😔');
    } else if (command === 'debil') {
        message.react('😡');
                message.channel.send(' ');
    }
});

client.on('message', message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 
    if (command === 'like') {
  message.channel.send(' https://cdn.discordapp.com/emojis/805822322123472986.gif?v=1&size=64 ');
    } else if (command === 'cb spadaj') {
  message.reply('okej');
    } else if (command === 'xd') {
        message.react('🤔');
                message.channel.send(' ');
    }
});

client.login('bot token');
require('http').createServer((req, res) => res.end('Bot ruszył!')).listen(3000)
