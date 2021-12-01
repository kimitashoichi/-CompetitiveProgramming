// 問題URL
// https://atcoder.jp/contests/abc183/tasks/abc183_a

function relu(x: number) {
  if (x >= 0) {
    console.log(x);
  } else {
    console.log(0);
  }
}

relu(1)
relu(0)
relu(-1)