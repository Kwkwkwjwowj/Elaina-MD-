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
const uploadImage = require('../lib/uploadImage');

let handler = async (m, {
	conn,
	command
}) => {
	let q = m.quoted ? m.quoted : m;
	let mime = (q.msg || q).mimetype || '';
	if (/image/.test(mime)) {
		let img = await q.download();
		let imageUrl = await uploadImage(img);
		try {
			let api = `https://api.neoxr.my.id/api/recolor?image=${encodeURIComponent(imageUrl)}&apikey=lucycat`;

			conn.chatRead(m.chat)
			conn.sendMessage(m.chat, {
				react: {
					text: '🕒',
					key: m.key,
				}
			})

			let {
				data
			} = await axios.get(api);
			let recoloredImageUrl = data.data.url;
			conn.sendFile(m.chat, recoloredImageUrl, 'recolor.jpg', 'Inilah gambar yang direcolor:', m);
		} catch (e) {
			console.log(e);
			conn.reply(m.chat, 'Error!', m);
		}
	} else {
		conn.reply(m.chat, 'Tolong jawab sesuai gambar', m);
	}
}

handler.command = /^(recolor|warnain)$/i;
handler.tags = ['tools'];
handler.help = ['recolor', 'warnain'];
handler.premium = false;

module.exports = handler;