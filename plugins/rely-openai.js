/* 
Script By Reelly XD
   YT: ReellyXD
   IG: reellyxd
Buy Script? 
   WA: +62 857-0436-85323
   TELE: t.me/rely_xd
   Github: github.com/ReellyXD
*/

const fetch = require('node-fetch');

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply('Masukkan permintaan.');
  } else {
    const apiUrl = 'https://api.azz.biz.id/api/gpt';
    const queryParams = new URLSearchParams({
      q: text,
      user: m.sender, 
      key: 'alok',
    });

    const apiUrlWithParams = `${apiUrl}?${queryParams.toString()}`;

    try {
      const response = await fetch(apiUrlWithParams);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      m.reply(data.respon);
    } catch (error) {
      console.error('Fetch error:', error);
      m.reply('Terjadi kesalahan saat mengakses API.');
    }
  }
}

handler.help = ['ai'];
handler.command = /^(ai)$/i
handler.tags = ['ai'];
handler.limit = false;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

module.exports = handler;