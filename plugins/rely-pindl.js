/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const fetch = require('node-fetch')

let handler = async (m, {
	conn,
	command,
	args
}) => {
	if (!args[0]) {
		return conn.reply(m.chat, '*Example*: .pindl https://pin.it/xxxxx', m)
	}
	let apikey = `${global.lolkey}`
	let url = `https://api.lolhuman.xyz/api/pinterestdl?apikey=${apikey}&url=${args[0]}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
	let res = await fetch(url)
	let json = await res.json()
	if (json.status !== 200) {
		return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
	}
	let result = json.result
	let response = await fetch(result)
	let buffer = await response.buffer()
	conn.sendFile(m.chat, buffer, 'pin.jpg', '', m)
}

handler.help = ['pindl <link>', 'pinteresetdl <link>']
handler.tags = ['downloader']
handler.command = /^(pindl|pinteresetdl)$/i
handler.register = true
handler.limit = true

module.exports = handler