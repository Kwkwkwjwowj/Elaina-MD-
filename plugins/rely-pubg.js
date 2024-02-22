/*
let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*Example*: .pubg Reelly'
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://saipulanuar.ga/api/maker/pubeje?text=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'pubg.jpg', `Nih kak`, m, false)
}
handler.help = ['pubg'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(pubg)$/i
handler.register = true
handler.limit = true

module.exports = handler
*/