/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

let handler = async (m, { conn, args }) => {
  if (args.length !== 1) {
    throw '*Example*: .redemcode 100000';
  }

  let totalPrize = parseInt(args[0]);
  if (isNaN(totalPrize) || totalPrize <= 0) {
    throw '*Example*: .redemcode 100000';
  }

  let redeemCodes = [];
  let prizePerPerson = Math.floor(totalPrize / 5);
  let remainingPrize = totalPrize;

  for (let i = 0; i < 5; i++) {
    let redeemCode = Math.floor(Math.random() * 90000) + 10000;
    let expiryTime = Date.now() + (5 * 60 * 1000); // 5 minutes
    let prizeAmount = Math.min(prizePerPerson, remainingPrize);

    redeemCodes.push({
      code: redeemCode,
      expiryTime: expiryTime,
      prize: prizeAmount,
      redeemedBy: []
    });

    remainingPrize -= prizeAmount;
  }

  global.redeemCodes = redeemCodes;

  conn.reply(m.chat, `ðŸ± Kode Redem Anda adalah ${redeemCodes[0].code}, harap redem sebelum batas waktu 5 menit.\n\nTotal hadiah dibagikan: ${totalPrize} balance, dibagi rata di antara 5 orang:\n- ${redeemCodes[0].prize} balance\n- ${redeemCodes[1].prize} balance\n- ${redeemCodes[2].prize} balance\n- ${redeemCodes[3].prize} balance\n- ${redeemCodes[4].prize} balance`, m);
};

handler.help = ['redemcode <jumlah hadiah>'];
handler.tags = ['game'];
handler.command = /^redemcode$/i;
handler.register = true;
handler.owner = true

module.exports = handler;