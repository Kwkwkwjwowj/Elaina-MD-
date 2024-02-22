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
    conn.reply(m.chat, '*Example*: .character Reelly', m);
    return;
  }

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})

  try {
    let query = encodeURIComponent(text);
    let url = `https://api.lolhuman.xyz/api/character?apikey=${global.lolkey}&query=${query}`;
    let response = await axios.get(url);
    let data = response.data.result;

    if (data) {
      let { name, image, description, favourites, media } = data;
      description = description.replace(/~/g, '');
      let caption = `*${name.full} (${name.native})*
Favorit: ${favourites} orang
Deskripsi: ${description}
Media: ${media.nodes.length} media`;

      conn.sendFile(m.chat, image.large, '', caption, m);
    } else {
      conn.reply(m.chat, 'Karakter tidak ditemukan.', m);
    }
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m);
  }
};

handler.help = ['character <teks>'];
handler.tags = ['info'];
handler.command = /^character$/i;

module.exports = handler;
