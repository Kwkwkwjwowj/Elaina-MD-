/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


let fs = require('fs')
let path = require('path')
let { spawn } = require('child_process')
let ffmpeg = require('fluent-ffmpeg')
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  let vn = m.quoted && m.quoted.mimetype.startsWith('audio') ? await m.quoted.download() : m.msg.audioData
  if (!vn) return conn.reply(m.chat, 'Mohon reply voice note yang ingin disimpan dengan caption .addvn <nama>', m)
    
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: 'ðŸ•’',
			key: m.key,
		}
	})

  let name = text.trim()
  if (!name) return conn.reply(m.chat, 'Mohon masukkan nama file', m)

  let ext = path.extname(name)
  let namabaru = name.replace(ext, '') + '.opus'

  let filepath = path.join(__dirname, '../flyaudio/', namabaru)

  let bufs = []
  let cmd = spawn('ffmpeg', [
    '-i', '-',
    '-f', 'opus',
    '-ar', '48000',
    '-ac', '2',
    '-vbr', 'on',
    '-application', 'voip',
    '-compression_level', '10',
    '-frame_duration', '20',
    '-packet_loss', '5',
    'pipe:1'
  ])
  cmd.stderr.on('data', console.error)
  cmd.stdout.on('data', chunk => bufs.push(chunk))
  cmd.on('exit', async code => {
    if (code !== 0) return conn.reply(m.chat, `Gagal mengkonversi file ${name} ke .opus`, m)

    let buffer = Buffer.concat(bufs)
    await fs.promises.writeFile(filepath, buffer)

    conn.reply(m.chat, `Berhasil menyimpan file ${namabaru}`, m)
  })
  cmd.stdin.write(vn)
  cmd.stdin.end()
}
handler.help = ['addvn <nama>']
handler.tags = ['tools']
handler.premium = false
handler.command = /^addvn$/i
handler.limit = true
handler.group = false
handler.register = true
handler.botAdmin = false

module.exports = handler