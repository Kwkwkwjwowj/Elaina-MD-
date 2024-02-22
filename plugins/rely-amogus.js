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
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Example*: .amongus Reelly'
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ğŸ•’',
			key: m.key,
		}
	})
  let res = `https://api.lolhuman.xyz/api/amongus?apikey=${global.lolkey}&text=${response[0]}`
  conn.sendFile(m.chat, res, 'amongus.jpg', `Nih kak`, m, false)
}
handler.help = ['amongus'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(amongus)$/i
handler.register = true
handler.limit = true

module.exports = handler