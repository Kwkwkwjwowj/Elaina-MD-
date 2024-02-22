/* 
Script By Reelly XD
  � YT: ReellyXD
  � IG: reellyxd
Buy Script? 
  � WA: +62 857-0436-85323
  � TELE: t.me/rely_xd
  � Github: github.com/ReellyXD
*/

let handler = async (m, { conn, text }) => {
  let premiumList = [
    {
      duration: "1 DAY",
      price: 100000000,
      command: "1D",
    },
    {
      duration: "2 DAY",
      price: 200000000,
      command: "2D",
    },
    {
      duration: "3 DAY",
      price: 300000000,
      command: "3D",
    },
    {
      duration: "4 DAY",
      price: 400000000,
      command: "4D",
    },
    {
      duration: "7 DAY",
      price: 700000000,
      command: "7D",
    },
    {
      duration: "30 DAY",
      price: 1000000000,
      command: "30D",
    },
  ];

  if (!text) {
    let listText = "*PREMIUM LIST:*\n\n";
    premiumList.forEach((premium, index) => {
      listText += `${index + 1}. PREMIUM ${premium.duration}\n`;
      listText += `◦  Price : *${premium.price.toLocaleString()}* Balance\n`;
      listText += `◦  *Command :* .buyprem ${premium.command}\n\n`;
    });

    conn.reply(m.chat, listText, m, {
      contextInfo: {
        externalAdReply: {
     	showAdAttribution: true,
          title: `${global.namebot}`,
          body: "Halo, silakan pilih paket premium Anda.",
          thumbnailUrl: flythumb,
          sourceUrl: web,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

    return;
  }

  let days = parseInt(text);
  if (isNaN(days)) return conn.reply(m.chat, "Invalid input. Masukkan jumlah hari yang ingin Anda beli.", m);

  let selectedPremium = premiumList.find((premium) => premium.command.toLowerCase() === text.toLowerCase());
  if (!selectedPremium) return conn.reply(m.chat, "Premi tidak ditemukan.", m);

  let user = global.db.data.users[m.sender];
  if (!user) return conn.reply(m.chat, "Anda tidak terdaftar.", m);

  let balance = user.balance || 0;
  let price = selectedPremium.price * days;
  if (balance < price) return conn.reply(m.chat, "Balance tidak mencukupi.", m);

  user.premium = true;
  user.premiumDate = Date.now() + days * 24 * 60 * 60 * 1000;
  user.limit += days;
    
  	conn.chatRead(m.chat)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})

  user.balance -= price;

  conn.reply(m.chat, `Anda telah berhasil membeli *${selectedPremium.duration}* Premium.\nSetelah membeli jangan membeli lagi, karena akan membuat prem sebelumnya hangus`, m);
};

handler.command = /^buyprem$/i;
handler.help = ["buyprem [duration]"];
handler.tags = ["main"];
handler.register = true;

module.exports = handler;
