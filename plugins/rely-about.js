/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/


let handler = async (m, { conn }) => {
  let aboutID = 'RnsID_BOT adalah bot WhatsApp yang cerdas dan sangat berguna untuk membantu Anda dalam menjawab pertanyaan dan memberikan solusi yang tepat dalam waktu yang singkat. Dikembangkan oleh RnsID_BOT, bot ini menggunakan sumber asli base Orlando Store yang terus diperbarui oleh RnsID_BOT untuk memberikan pengalaman berinteraksi yang lebih mudah dan menyenangkan.

Dengan kemampuannya yang luas dalam menjawab pertanyaan dan memberikan solusi, RnsID_BOT dapat membantu Anda dalam berbagai hal seperti, mencari informasi tentang produk atau layanan, mengatur jadwal, dan banyak lagi. WEEBO BOT juga dapat memberikan jawaban yang akurat dan cepat sehingga Anda tidak perlu lagi menunggu lama untuk mendapatkan jawaban yang Anda butuhkan.

Sebagai produk yang dikembangkan dan diperbarui oleh 𝐎𝐑𝐋𝐀𝐍𝐃𝐎, WEEBO BOT selalu menerima pembaruan fitur-fitur terbaru untuk memberikan layanan yang semakin baik dan canggih. Dengan WEEBO BOT, Anda tidak perlu khawatir tentang kualitas layanan yang diberikan karena bot ini selalu siap memberikan solusi yang terbaik bagi pengguna WhatsApp. Jadi, tunggu apa lagi? Gunakan WEEBO BOT sekarang dan nikmati kemudahan serta kenyamanan dalam berinteraksi dengan bot cerdas ini di WhatsApp!`

  let aboutEN = `𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎 is a smart WhatsApp bot that is very useful for helping you answer questions and provide accurate solutions in a short amount of time. Developed by Reelly, this bot uses the original source of Botcahx that is constantly updated by 𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎 to provide an easier and more enjoyable interactive experience.

With its broad ability to answer questions and provide solutions, 𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎 can assist you in various things such as searching for information about products or services, scheduling appointments, and much more. 𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎 can also provide accurate and quick answers so you no longer have to wait long to get the answers you need.

As a product developed and updated by Reelly, 𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎 always receives the latest feature updates to provide better and more advanced services. With 𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎, you don't have to worry about the quality of the service provided because this bot is always ready to provide the best solutions for WhatsApp users. So, what are you waiting for? Use 𝐁𝐎𝐓-𝐎𝐑𝐋𝐀𝐍𝐃𝐎 now and enjoy the ease and convenience of interacting with this smart bot on WhatsApp!`
  
 	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  let about = `${aboutID}\n\n${aboutEN}`

  let url = "https://telegra.ph/file/38a04ac8e32f2a4fb379e.jpg"

  conn.sendFile(m.chat, url, 'about.jpg', about, m)
}

handler.help = ['about', 'detile', 'aboutbot', 'tentang', 'detail']
handler.tags = ['info']
handler.command = /^(about|detile|aboutbot|tentang|detail)$/i
handler.register = true

module.exports = handler