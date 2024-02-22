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

let handler = async (m, { text }) => {
  if (!text) return conn.reply(m.chat, 'Masukan kode kak, contoh: .carbon print("Reelly XD")', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/carbon?apikey=${apikey}&code=${encodeURIComponent(text)}&language=python`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'carbon.jpg', '', m)
}

handler.help = ['carbon <kode>']
handler.tags = ['maker']
handler.command = /^carbon$/i
handler.limit = true

module.exports = handler