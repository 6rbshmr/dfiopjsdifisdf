const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '548306213817810975').setName("6");
client.channels.find('id', '548306213817810975').setName("6r");
client.channels.find('id', '548306213817810975').setName("6rb");
client.channels.find('id', '548306213817810975').setName("6rb'");
client.channels.find('id', '548306213817810975').setName("6rb's");
client.channels.find('id', '548306213817810975').setName("6rb's ");
client.channels.find('id', '548306213817810975').setName("6rb's K");
client.channels.find('id', '548306213817810975').setName("6rb's Ki");
client.channels.find('id', '548306213817810975').setName("6rb's Kin");
client.channels.find('id', '548306213817810975').setName("6rb's KingD");
client.channels.find('id', '548306213817810975').setName("6rb's KingDo");
client.channels.find('id', '548306213817810975').setName("6rb's KingDom");
client.channels.find('id', '548306213817810975').setName("6rb's KingDom ");
client.channels.find('id', '548306213817810975').setName("6rb's KingDom !");
  }, 60000);
});






client.login(process.env.USER_TOKEN);
