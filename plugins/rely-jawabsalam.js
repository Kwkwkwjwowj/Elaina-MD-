/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


let handler = async (m, { conn }) => {
  let regex = /^(assalamualaikum|salam|ass|halo?|p|bang)$/i
  if (regex.test(m.text)) {
    let user = global.db.data.users[m.sender]
    let name = user.name
    let caption = `Waalaikumsalam *${name}*`
    m.reply(caption, null, {
      sendEphemeral: true,
      quoted: m
    })
  }
}

handler.command = /.*/
handler.customPrefix = /^(assalamualaikum|salam|ass|salo?m)$/i
handler.exp = 0

module.exports = handler
