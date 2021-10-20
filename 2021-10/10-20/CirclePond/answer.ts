// 問題URL
// https://atcoder.jp/contests/abc163/tasks/abc163_a

function circlePond(r: number) {
  const circle = 3.141592653589793238462643383279;
  const answer = 2 * r * circle;
  console.log(answer.toFixed(20));
}

circlePond(1); 
circlePond(73); 
