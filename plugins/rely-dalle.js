const fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) throw '*Example*: .dalle cat'
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let url = `https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`
  let response = await fetch(url)
  let result = await response.buffer()
  conn.sendFile(m.chat, result, 'dalle.jpg', 'Here your image', m)
}

handler.command = /^(dalle|aidalle|openaiimage)$/i
handler.help = ['dalle <teks>', 'aidalle <teks>', 'openaiimage <teks>']
handler.tags = ['premium']
handler.premium = true
handler.limit = true
handler.premium = false
handler.register = true

module.exports = handler