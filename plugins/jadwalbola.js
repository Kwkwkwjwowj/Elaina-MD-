/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD/FlyBot
*/


const axios = require('axios');

let handler = async (m, { conn }) => {
  try {
    let response = await axios.get('https://api.lolhuman.xyz/api/jadwalbola?apikey=ayakaviki');
    let data = response.data;
    let result = data.result;

    let caption = 'Jadwal Pertandingan Bola:\n\n';
    for (let i = 0; i < result.length; i++) {
      let match = result[i];
      caption += `â€¢  *${match.time}*\n`;
      caption += `â—¦  Event: ${match.event}\n`;
      caption += `â—¦  Match: ${match.match}\n`;
      caption += `â—¦  TV: ${match.tv}\n\n`;
    }

    conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
        	showAdAttribution: true,
          title: namebot,
          body: "Berikut adalah hasil jadwal bola yang Anda cari",
          thumbnailUrl: flythumb,
          sourceUrl: `${global.sourceUrl}`,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.log(error);
    conn.reply(m.chat, 'ðŸ± Maaf, terjadi kesalahan saat memuat jadwal pertandingan bola.', m);
  }
};

handler.help = ['jadwalbola'];
handler.tags = ['info'];
handler.command = /^jadwalbola$/i;

module.exports = handler;
