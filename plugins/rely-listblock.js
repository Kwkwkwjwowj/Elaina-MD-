var fetch = require("node-fetch");

var handler = async (m, { conn }) => {
  var block = await conn.fetchBlocklist();
  var blockList = block.map((v) => `◦ @${v.replace(/@.+/, '')}`).join('\n');
  var totalBlock = block.length;
  var caption = `•  *L I S T  B L O C K*\n\n${blockList}\n\nTotal: *${totalBlock}* Telah Diblokir`;
  conn.reply(m.chat, caption, m, { mentions: block });
};

handler.help = ['blocklist'];
handler.tags = ['info'];
handler.command = /^listbloc?k|bloc?klist|daftarbloc?k|blocks$/i;
handler.owner = false;
module.exports = handler;
