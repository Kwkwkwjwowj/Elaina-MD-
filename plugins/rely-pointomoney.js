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
    throw '*Example*: .pointobalance 1000'
  }
  let poin = parseInt(args[0])
  if (isNaN(poin) || poin < 1) {
    throw 'Jumlah poin yang ingin Anda konversi harus lebih besar dari atau sama dengan 1!'
  }

  let fee = Math.round(poin * 0.05)
  let balance = poin - fee

  let message = `Berikut rincian konversi poin ke uang:\n\n`
  message += `• Jumlah Poin: ${poin}\n`
  message += `• Biaya (5%): ${fee}\n`
  message += `• Jumlah saldo: ${balance}`

  let user = global.db.data.users[m.sender]
  if (poin > user.poin) {
    throw 'Maaf, Anda tidak memiliki cukup poin untuk dikonversi.'
  }
  user.poin -= poin
  user.uang += balance
  global.db.data.users[m.sender] = user
  global.db.write()

  m.reply(message)
}

handler.help = ['pointobalance <jumlah poin>']
handler.tags = ['game']
handler.command = /^pointobalance$/i
handler.register = true
handler.limit = true

module.exports = handler