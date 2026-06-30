import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const expectedLines = ["谢谢你哦"];

const missing = expectedLines.filter((line) => !html.includes(line));

if (missing.length > 0) {
  console.error(`Expected index.html to contain: ${missing.join(", ")}`);
  process.exit(1);
}

console.log("OK: welcome text exists");
