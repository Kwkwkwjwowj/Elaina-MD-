/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/



const { createHash } = require('crypto')

let handler = async function(m, { args }) {
  if (!args[0]) throw '*Example*: .unreg 90259a21exxxxxx'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Nomor seri salah'

  user.registered = false
  m.reply(`Unreg berhasil!`)
}

handler.help = [''].map(v => 'unreg' + v + ' <SERIAL NUMBER>')
handler.tags = ['start']
handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler
