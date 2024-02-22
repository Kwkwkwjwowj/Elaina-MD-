/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn, text, usedPrefix }) => {
  let user = global.db.data.users[m.sender]
  if (!user) throw 'Anda tidak terdaftar di database'

  if (!text || !/^\d+$/.test(text)) {
    throw `Example: ${usedPrefix}spin 1000`
  }

  let betAmount = parseInt(text)
  if (user.balance < betAmount) throw 'ðŸ± Balance Anda tidak mencukupi'

  let result = Math.random() >= 0.5 
  let wonAmount = result ? Math.ceil(betAmount * 1.31919) : -betAmount
  user.balance += wonAmount

  let delay = 1000
  if (user.lastSpin && new Date() - user.lastSpin < delay) {
    let time = (user.lastSpin + delay - new Date()) / 1000
    throw `ðŸ± Harap tunggu ${time.toFixed(1)} detik sebelum melakukan spin berikutnya`
  }
  user.lastSpin = new Date()

  let caption = `â€¢  S P I N  -  R E S U L T\n\n`
  caption += `- ${betAmount.toLocaleString()}\n`
  caption += result ? `+ ${wonAmount.toLocaleString()}\n\n` : `\n\n`
  caption += `â€¢ Total : ${user.balance.toLocaleString()} Balance`

  conn.reply(m.chat, caption, m, {
    contextInfo: {
      externalAdReply: {
      showAdAttribution: true,
        title: `${global.namebot}`,
        body: "Ini adalah hasil dari spin Anda",
        thumbnailUrl: flythumb,
        sourceUrl: `${global.sourceUrl}`,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  })
}

handler.help = ['spin']
handler.tags = ['game']
handler.command = /^(spin)$/i

module.exports = handler