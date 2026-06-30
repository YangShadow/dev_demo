import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const expected = "欢迎光临";

if (!html.includes(expected)) {
  console.error(`Expected index.html to contain: ${expected}`);
  process.exit(1);
}

console.log("OK: stargate welcome text exists");
