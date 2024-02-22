let handler = async (m, { conn }) => {
	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  await delay(2000)
  m.reply('Tunggu, kami sedang menyiapkan panel terbaik untuk Anda.')

  await delay(2000)
  m.reply(`*Not found*`)
}

handler.help = ['buypanel, panel']
handler.tags = ['info']
handler.command = /^(buypanel|panel)$/i

module.exports = handler

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
