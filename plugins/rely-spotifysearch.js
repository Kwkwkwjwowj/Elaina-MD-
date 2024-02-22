/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


const axios = require('axios');

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*Example:* ${usedPrefix}${command} Rewrite the star`;
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  try {
    let query = encodeURIComponent(text);
    let api = `https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolkey}&query=${query}`;
    let { data } = await axios.get(api);

    if (data.status !== 200 || !data.result || data.result.length === 0) {
      m.reply('Maaf, kami tidak dapat menemukan lagu yang Anda cari.');
      return;
    }

    let result = data.result[0];
    let { title, artists, external_urls } = result;
    let artist = artists;
    let songLink = external_urls.spotify;

    let caption = `â”Œ  â—¦  *Judul:* ${title}
â”‚  â—¦  *Artis(s):* ${artist}
â”‚  â—¦  *Download lagu, Contoh:* .spotifydl link
â””  â—¦  *Dengarkan di Spotify:* ${songLink}`;

    m.reply(caption);
  } catch (error) {
    console.log(error);
    m.reply('Maaf, kami tidak dapat menemukan lagu yang Anda cari. Berikan judul yang lebih spesifik.');
  }
};

handler.help = ['spotify <song title>'];
handler.tags = ['premium'];
handler.command = /^spotify$/i;
handler.exp = 0;
handler.limit = 3;
handler.premium = false;

module.exports = handler;