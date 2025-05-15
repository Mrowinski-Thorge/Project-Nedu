
const fs = require('fs');
const chain = JSON.parse(fs.readFileSync('./blocks.json', 'utf-8'));
function validHash(b, d=4) {
  return b.hash.startsWith("0".repeat(d));
}
function validLink(b, i) {
  return i === 0 || b.prevHash === chain[i - 1].hash;
}
function validate() {
  for (let i = 0; i < chain.length; i++) {
    if (!validHash(chain[i])) return false;
    if (!validLink(chain[i], i)) return false;
  }
  return true;
}
console.log("Gültige Blockchain:", validate());
