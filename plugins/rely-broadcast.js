let handler = async (m, { conn, text }) => {
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  m.reply(`Mengirim pesan broadcast ke ${chats.length} chat`)
  for (let id of chats) {
    await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '\n*MakeMeow Broadcast*'), true).catch(_ => _)
    await delay(2000)
  }
  m.reply(`Pesan broadcast dikirim ke ${chats.length} chats`)
}

handler.help = ['broadcast', 'bc'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc|bcs)$/i
handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}