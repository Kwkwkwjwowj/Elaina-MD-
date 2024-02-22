const free = 50000
const prem = 100000
const balancefree = 50000
const balanceprem = 100000
const timeout = 3600000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 3600000
  if (new Date - global.db.data.users[m.sender].lastclaim < 3600000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].balance += isPrems ? balanceprem : balancefree
       // global.db.data.users[m.sender].potion += 5
        conn.reply(m.chat, `Selamat kamu mendapatkan:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? balanceprem : balancefree} balance`, m)
        global.db.data.users[m.sender].lastclaim = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Hourly sudah bisa di dapatkan kembali`, m)
					}, timeout)
    } 
handler.help = ['hourly']
handler.tags = ['rpg']
handler.command = /^(hourly)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.balance = 0
handler.exp = 0
handler.limit = false

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}