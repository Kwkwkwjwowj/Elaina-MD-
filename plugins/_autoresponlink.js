/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

let handler = m => m

handler.all = async function (m, { isBlocked }) {
  if (isBlocked) return
  if (
    (m.mtype === 'groupInviteMessage' ||
      m.text.startsWith('Undangan untuk bergabung') ||
      m.text.startsWith('Invitation to join') ||
      m.text.startsWith('Buka tautan ini')) &&
    !m.isBaileys &&
    !m.isGroup
  ) {
    let teks = `Mau nambahin bot ke grup kak?
Sewa Aja Bro Murah Kok Hehe..

*HARGA:*
➠ 25K/Bulan.
_Tiap Bulan Bayar 15K_
_Free premium 30 hari_

➠ 50K/Tahun
_Tiap Tahun Bayar 30K_
 _Free premium 60 hari_

➠ 15K/Minggu
_Tiap Minggu Bayar 5K_
_Free premium 7 hari_

*Minat? Hubungi*
° https://wa.me/6283871211368

*_Mau Gratis? Join Grup Ini_* https://chat.whatsapp.com/D6bHVUjyGj06bb6iZeUsOI`

    this.reply(m.chat, teks, m)
  }
}

module.exports = handler