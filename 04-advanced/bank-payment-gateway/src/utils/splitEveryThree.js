export default function splitEveryThree(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
