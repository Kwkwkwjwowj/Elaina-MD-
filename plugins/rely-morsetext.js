/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let fetch = require('node-fetch')

let handler = async (m, {
	conn,
	args
}) => {
	if (!args[0]) {
		conn.reply(m.chat, `Silakan masukkan kode morse yang ingin diubah menjadi teks.`, m)
		return
	}
	let text = args.join(' ')
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
	let query = encodeURIComponent(text)
	let res = await fetch(`https://api.lolhuman.xyz/api/morse/decrypt?apikey=${global.lolkey}&text=${query}`)
	let json = await res.json()

	conn.reply(m.chat, json.result, m)
}

handler.help = ['morsetext <kode morse>']
handler.tags = ['tools']
handler.command = /^\morsetext/i
handler.register = true
handler.limit = true

module.exports = handler