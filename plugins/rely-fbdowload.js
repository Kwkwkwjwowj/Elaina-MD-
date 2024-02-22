/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

var api = require('api-dylux');

var handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `*Example*: .fb https://www.facebook.com/xxxxxxx`;
  }

  try {
    var response = await api.fbdl(text);
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
    conn.sendFile(m.chat, response.videoUrl, 'fb.mp4', response.title, m);
  } catch (error) {
    console.log(error);
    m.reply('Sepertinya ada masalah mengunduh video.');
  }
};

handler.help = ['facebook'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^((facebook|fb)(downloder|dl)?)$/i;
module.exports = handler;
