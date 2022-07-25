/**
 * @see https://atcoder.jp/contests/abc115/tasks/abc115_b
 */

function christmasEveEve (N: number, p: number[]) {
  const newArray = p.sort((a, b) => b - a);
  newArray[0] =  newArray[0] / 2;
  const totalPrice = newArray.reduce((total, current) => total + current);
  console.log(totalPrice);
}

christmasEveEve(3, [
  4980,
  7980,
  6980
]) // 15950

christmasEveEve(4, [
  4320,
  4320,
  4320,
  4320
]) // 15120