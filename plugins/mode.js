let handler = async (m, { conn }) => {
    let wm = global.wm
    let _uptime = process.uptime() * 1000
    let uptimex = clockString(_uptime)

    let rely = `
*Mode:* ${global.opts['self'] ? 'Self' : 'Public'}\n*Aktif:* ${uptimex}\n*User:* ${Object.keys(global.db.data.users).length}\n*User Banned:* ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}\n*Fitur yang Sering Digunakan:* ${Object.entries(db.data.stats).length}\n\nJika bot tidak membalas, berarti bot sedang dalam perbaikan.
    `.trim()
conn.sendMessage(m.chat, {
text: rely,
contextInfo: {
externalAdReply: {
title: "",
body: uptimex,
thumbnailUrl: flythumb,
sourceUrl: "https://telegra.ph/file/38a04ac8e32f2a4fb379e.jpg",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(mode)$/i 
handler.command = new RegExp
handler.register = true
handler.limit = true

module.exports = handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Hari " + hours + " Jam " + minutes + " Menit " + sec + " Detik";
}