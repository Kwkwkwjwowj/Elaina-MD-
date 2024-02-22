/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { args }) => {
  if (args.length !== 1) {
    throw '*Example*: .balancetopoin 1000'
  }
  let balance = parseInt(args[0])
  if (isNaN(balance) || balance <= 0) {
    throw 'Jumlah uang yang dimasukkan harus angka positif!'
  }
  let fee = Math.floor(balance * 0.5)
  let poin = Math.floor(balance * 0.5)
  let message = `• Kamu menconvert uang senilai ${balance}\n`
  message += `• Dan kamu mendapatkan poin senilai ${poin}\n`
  message += `• Biaya fee kamu adalah ${fee}`
  let user = global.db.data.users[m.sender]
  if (!user) {
    user = { poin: 0 }
    global.db.data.users[m.sender] = user
  }
  user.poin = (user.poin || 0) + poin
  global.db.write()
  m.reply(message)
}

handler.help = ['balancetopoin <jumlah uang>']
handler.tags = ['game']
handler.command = /^balancetopoin$/i
handler.register = true
handler.limit = true

module.exports = handler