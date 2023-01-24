function generateID() {
  const chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  let now = Math.round(Date.now() * Math.random());
  let res = String(now)
    .substring(String(now).length - 7)
    .split("")
    .map((v) =>
      Math.random() > 0.5 ? chars[Number(v)] : chars[Number(v)].toUpperCase()
    );
  return res.join("");
}
function generateLongID() {
  const chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let res = [];

  for (let i = 0; i <= 1499; i++) {
    let item = chars[Math.floor(Math.random() * chars.length)];
    res.push(Math.random() > 0.5 ? item.toLowerCase() : item.toUpperCase());
  }
  return res.join("");
}

module.exports = { generateID, generateLongID };
