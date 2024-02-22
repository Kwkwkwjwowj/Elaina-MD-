/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/
const fetch = require('node-fetch');
const { readFileSync } = require('fs');

const config = JSON.parse(readFileSync('config.json'));

let handler = async (m, { conn, text, command }) => {
  if (!text) {
    throw `*Example:* .${command} https://chat.whatsapp.com/DaXiUFFtDTw7aB2bDTlkGg`;
  }

  try {
    const token = config.apiToken;
    const url = 'https://t.ly/api/v1/link/shorten';
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    const body = {
      'long_url': text,
      'domain': 'https://t.ly/',
      'public_stats': true,
    };
    
    conn.chatRead(m.chat);
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });
    const data = await response.json();
    
    m.reply(`Berikut shortlink anda: ${data.short_url}`);
  } catch (error) {
    console.log(error);
    m.reply('Maaf, terjadi kesalahan, coba lagi nanti!');
  }
};

handler.help = ['short', 'shortlink'].map(v => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(short|shortlink)$/i;
handler.limit = 1;

module.exports = handler;