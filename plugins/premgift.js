const prem = 4000000
const limitprem = 400
const moneyprem = 4000000

let handler = async (m, { isPrems }) => {
    let time = global.db.data.users[m.sender].lastgift + 259200000
  if (new Date - global.db.data.users[m.sender].lastgift < 259200000) throw `Anda sudah mengklaim, klaim Premgift ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      // conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
        global.db.data.users[m.sender].limit += isPrems ? limitprem : limitfree
       // global.db.data.users[m.sender].pet += 3
        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money\n+${isPrems ? limitprem : limitfree} Limit`, m)
        global.db.data.users[m.sender].lastgift = new Date * 1
    }
handler.help = ['premgift']
handler.tags = ['rpgabsen']
handler.command = /^(premgift)$/i
handler.premium = true

handler.fail = null

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
    monthly = Math.floor((duration / (1000 * 60 * 60 * 24)) % 720)

  monthly  = (monthly < 10) ? "0" + monthly : monthly
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return monthly + " hari " +  hours + " jam " + minutes + " menit"
}