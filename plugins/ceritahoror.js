/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

const axios = require('axios');

let handler = async (m, { conn }) => {
  try {
    m.reply(wait);

    let response = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${global.lolkey}`);
    let result = response.data.result;

    let thumbnail = result.thumbnail;
    let caption = `*${result.title}*\n\n${result.desc}\n\n${result.story}`;

    conn.sendFile(m.chat, thumbnail, 'rely.jpg', caption, m);
  } catch (error) {
    console.log(error);
    m.reply('Terjadi kesalahan saat mengambil cerita horor.');
  }
};

handler.help = ['ceritahoror'];
handler.tags = ['internet'];
handler.command = /^ceritahoror$/i;

module.exports = handler;