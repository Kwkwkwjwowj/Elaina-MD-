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
  if (!text) return conn.reply(m.chat, '*Example*: .wolflogo Reelly|XD', m)
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})
  let apikey = `${global.lolkey}`
  let url = `https://api.lolhuman.xyz/api/textprome2/wolflogo?apikey=${apikey}&text1=${encodeURIComponent(text.split('|')[0])}&text2=${encodeURIComponent(text.split('|')[1])}`
  let image = (await (await fetch(url)).buffer()).toString('base64')
  conn.sendFile(m.chat, `data:image/jpeg;base64,${image}`, 'wolflogo.jpg', '', m)
}

handler.help = ['wolflogo <text1>|<text2>']
handler.tags = ['maker']
handler.command = /^wolflogo$/i
handler.register = true
handler.limit = true

module.exports = handler