let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (m.text.toLowerCase() === 'p' || m.text.toLowerCase() === 'tes' || m.text.toLowerCase() === 'test') {
  conn.sendPresenceUpdate("recording", m.chat)
   conn.sendFile(m.chat, './mp3/PTT-20220913-WA0382.opus', '', null, m, true, { type: "audioMessage", ptt: true, waveform: [1,4,8,9,20,29,37,14,12,25,7,3] }, { quoted: m })
  }
}

module.exports = handler
