/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const nodemailer = require('nodemailer');
const config = require('../config.json');

let handler = async function(m, { text, usedPrefix }) {
  if (!text) throw `*Contoh*: ${usedPrefix}email DaffaXd.dafsaha219@gmail@gmail.com | Follow Tiktok: DaffaXd.`;
  let email = text.trim().split(/\s+\|\s+/).shift();
  let message = text.trim().split(/\s+\|\s+/).pop();
  if (!isValidEmail(email)) throw 'format email salah';
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.password
    }
  });
  let mailOptions = {
    from: config.email,
    to: email,
    subject: config.email_subject,
    html: `
      <div style="border: 1px solid #ccc; padding: 20px; font-family: monospace;">
        <p style="font-size: 16px; margin-bottom: 20px;">${message}</p>
        <div style="text-align: center; font-family: monospace;">
          <hr style="display: inline-block; margin-top: 20px; margin-bottom: 20px; width: 60%;">
          <p style="font-size: 12px; display: inline-block;">Config By DaffaXd</p>
        </div>
      </div>
    `
  };
  try {
    await transporter.sendMail(mailOptions);
    m.reply('Email telah terkirim!');
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengirim email. Silakan coba lagi nanti');
  }
};

handler.help = ['email'];
handler.tags = ['owner'];
handler.owner = true;
handler.command = /^(email|mail)$/i;

module.exports = handler;

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}