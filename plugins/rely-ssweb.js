/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


const api = require('api-dylux');

let handler = async (m, {
	conn,
	text
}) => {
	if (!text) {
		throw '*Example*: .ssweb https://github.com/ReellyXD';
	}

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

	try {
		let response = await api.ssweb(text);
		if (response.includes('Error: ')) {
			throw response;
		}
		conn.sendFile(m.chat, response, 'screenshot.jpg', '', m);
	} catch (error) {
		console.log(error);
		m.reply(`Terjadi kesalahan saat mengambil screenshot: ${error}`);
	}
};

handler.help = ['ssweb'];
handler.tags = ['tools'];
handler.command = /^ssweb$/i;

module.exports = handler;