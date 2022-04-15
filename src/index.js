let input = "                  JavaScript            ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const wrap = str => `<div>${str}</div>`;

const result = wrapInDiv(toLowerCase(trim(input)));