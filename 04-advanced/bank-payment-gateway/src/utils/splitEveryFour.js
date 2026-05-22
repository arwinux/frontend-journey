export default function splitEveryFour(text) {
  return text.match(/.{1,4}/g).join(" ");
}
