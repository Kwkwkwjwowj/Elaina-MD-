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

let handler = async (m, { conn, text }) => {
  if (!text) {
    throw '*Example:* .igstory moe.sazumiviki';
  }

  let username = text.trim();

  try {
    let api = `https://api.lolhuman.xyz/api/igstory/${username}?apikey=${global.lolkey}`;
    let { data } = await axios.get(api);

    if (data.status !== 200 || data.result.length === 0) {
      throw 'Tidak ada story Instagram di user tersebut.';
    }

    let mediaUrls = data.result;
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

    for (let url of mediaUrls) {
      await conn.sendFile(m.chat, url, '', '', m);
    }
  } catch (error) {
    console.log(error);
    throw 'Terjadi kesalahan saat mengambil Instagram story.';
  }
};

handler.help = ['igstory'];
handler.tags = ['downloader'];
handler.command = /^igstory$/i;

module.exports = handler;
