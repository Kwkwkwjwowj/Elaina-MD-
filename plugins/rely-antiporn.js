/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const axios = require("axios");
const uploadImage = require("../lib/uploadImage");

let handler = m => m
handler.before = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  let mime = (m.msg || m).mimetype || "";
  if (chat.antiPorn) {
  if (/image/.test(mime)) {
    conn.chatRead(m.chat);
    let img = await m.download();
    let imageUrl = await uploadImage(img);
    try {
      let api = `https://api.itsrose.life/image/nsfwCheck?url=${encodeURIComponent(
        imageUrl
      )}&apikey=${global.rose}&threshold=0.9`;
      let { data } = await axios.get(api);
      let status = data.status;
      if (status) {
        let classes = data.suggestive_classes;
        let isSuggestive = false;
        for (const key in classes) {
          if (classes[key] >= 0.9) {
            isSuggestive = true;
            break;
          }
        }
        if (data.erotica > 0.5 || data.sexual_display >= 0.5 || data.sexual_activity >= 0.5 || isSuggestive) {
          let user = m.sender;
          let mention = `@${user.replace(/@.+/, "")}`;
          await conn.reply(
            m.chat,
            ` ${mention} Detected sending *NSFW*`,
            m
          );
          await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
        }
      }
    } catch (e) {
      console.log(e);
      conn.reply(m.chat, "Error!", m);
    }
  }
 }
};

module.exports = handler;