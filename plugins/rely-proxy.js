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

let handler = async (m, { text }) => {
  let msg = text.trim()
  if (!msg) return m.reply('*Example*: .proxy reellyxd.me')

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = await fetch(`https://api.lolhuman.xyz/api/proxysite?apikey=${global.lolkey}&url=${encodeURIComponent(msg)}`)
  let json = await res.json()

  if (json.status == 200 && json.result) {
    m.reply(json.result)
  } else {
    m.reply('Gagal membuat proxy pada tautan yang diberikan.')
  }
}

handler.help = ['proxy <link>']
handler.tags = ['internet']
handler.command = /^proxy$/i

module.exports = handler