let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let botol = global.botwm
    let minim = `${Math.floor(Math.random() * 5)}`.trim() 
    let minam = `${Math.floor(Math.random() * 5)}`.trim() 
    let minum = `${Math.floor(Math.random() * 5)}`.trim() 
    let minkm = `${Math.floor(Math.random() * 5)}`.trim() 
    let time = global.db.data.users[m.sender].lastmining + 3000000
    
    if (user.pickaxe > 0) {
        if (new Date - user.lastmining > 3000000) {
            user.diamond += minim * 1
            user.berlian += minum * 1
            user.iron += minam * 1
            user.emerald += minkm * 1
            user.lastmining = new Date() * 1

            conn.reply(m.chat, `Sedang memproses...`, m)

            setTimeout(() => {
                let message = `Kamu Menambang Di ${pickRandom(['⛰️Lembah', '⛰️Goa mletre', '🏞️Sungai Selandia', '⛰️Goa texas', '...'])}\n*Hasil Tambang:*\nDiamond: *${minim}*\nBerlian: *${minum}*\nIron: *${minam}*\nEmerald: *${minkm}*`
                conn.reply(m.chat, message, m)
            }, 2000)
        } else {
            let remainingTime = time - new Date()
            conn.reply(m.chat, `Tunggu 🕓${msToTime(remainingTime)} lagi, untuk menambang`, m)
        }
    } else {
        conn.reply(m.chat, `Kamu Tidak Mempunyai *⛏️Pickaxe* untuk menambang\nBuat Lah Pickaxe menggunakan string kayu dan batu!`, m)
    }
}

handler.help = ['mining']
handler.tags = ['rpg']
handler.command = /^mining/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
}

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

let wm = global.wm
