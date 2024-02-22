/*const fetch = require('node-fetch')

let handler = async (m) => {
  if (!m || !m.text || m.text.toLowerCase() !== '.cerpensex') {
    return false
  }

  let url = 'https://api.betabotz.org/api/webzone/cersex?apikey=nakanosky'

	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  let response = await fetch(url)
  let data = await response.json()

  let message = `
    ◦ *Judul:* ${data.result.title}
    ◦ *Penulis:* ${data.result.tanggal}
    ◦ *Cerita:* ${data.result.cerita}
  `.trim()

  m.reply(message)
}

handler.help = ['cerpensex']
handler.tags = ['fun', 'internet']
handler.command = /^cerpensex$/i

module.exports = handler*/