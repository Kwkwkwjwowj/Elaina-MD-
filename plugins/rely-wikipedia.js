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

let handler = async (m, { conn, command, args }) => {
  if (!args[0]) {
    return conn.reply(m.chat, '*Example*: .wiki anime', m)
  }
  let apikey = `${global.lolkey}`
  let query = encodeURIComponent(args.join(' '))
  let url = `https://api.lolhuman.xyz/api/wiki?apikey=${apikey}&query=${query}`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let res = await fetch(url)
  let json = await res.json()
  if (json.status !== 200) {
    return conn.reply(m.chat, 'Maaf, terjadi kesalahan saat mengambil data dari server', m)
  }
  let result = json.result
  let message = `*${result}*`
  let response = await fetch(flythumb)
  let buffer = await response.buffer()
  conn.sendFile(m.chat, buffer, 'wikipedia.jpg', message.trim(), m)
}

handler.help = ['wiki <teks>', 'wikipedia <teks>']
handler.tags = ['tools']
handler.command = /^(wiki|wikipedia)$/i
handler.register = true
handler.limit = true

module.exports = handler