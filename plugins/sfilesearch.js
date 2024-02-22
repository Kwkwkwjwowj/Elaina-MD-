/*const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Cari Apa?`
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let resp = await fetch(`https://xzn.wtf/api/sfilesearch?title=${encodeURIComponent(text)}&page=1&apikey=nakanosky`);
  let data = await resp.json();
  let add = "SFILE SEARCH" + '\n\n'
  for (let i = 0; i < data.length; i++) {
  	add += "Title: " + data[i].name + '\n'
  	add += "Size: " + data[i].size + '\n'
  	add += "Url: " + data[i].url + '\n\n'
  	}
  m.reply(add)
}
handler.help = ['sfile query']
handler.tags = ['internet']
handler.command = /^(sfile)$/i

module.exports = handler*/