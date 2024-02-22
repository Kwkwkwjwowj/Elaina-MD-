/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
  • Github: github.com/ReellyXD
*/

const { tmpdir } = require('os');
const path = require('path');
const {
  readdirSync,
  statSync,
  unlinkSync,
  rmdirSync
} = require('fs');

let handler = async (m, { conn }) => {
  m.reply('Sukses menghapus file, folder TMP');

  const tmp = [tmpdir(), path.join(process.cwd(), 'tmp')];
  const filename = [];
  tmp.forEach((dirname) => {
    readdirSync(dirname).forEach((file) => {
      filename.push(path.join(dirname, file));
    });
  });
  
  return filename.map((file) => {
    const stats = statSync(file);
    if (stats.isDirectory()) {
      readdirSync(file).forEach((subfile) => {
        const subfilePath = path.join(file, subfile);
        const subfileStats = statSync(subfilePath);
        if (subfileStats.isFile()) {
          unlinkSync(subfilePath);
        } else if (subfileStats.isDirectory()) {
          rmdirSync(subfilePath, { recursive: true });
        }
      });
      rmdirSync(file, { recursive: true });
    } else if (stats.isFile()) {
      unlinkSync(file);
    }
  });
};

handler.help = ['cleartmp'];
handler.tags = ['owner'];
handler.command = /^cleartmp$/i;
handler.owner = true;

module.exports = handler;