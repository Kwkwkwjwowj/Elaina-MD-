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
  if (!text) return conn.reply(m.chat, '*Example*: .ff Reelly', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${apikey}&text=${encodeURIComponent(text)}`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'freefire.jpg', '', m)
}

handler.help = ['ff <teks>', 'freefire <teks>']
handler.tags = ['maker']
handler.command = /^(ff|freefire)$/i
handler.register = true
handler.limit = true

module.exports = handler