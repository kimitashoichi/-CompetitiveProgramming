// 問題URL
// https://atcoder.jp/contests/abc203/tasks/abc203_a

function Chinchirorin(a: number, b: number, c: number) {
if (a === b) {
    console.log(c);
    return;
  } else if (a === c) {
    console.log(b);
    return;
  } else if (b === c) {
    console.log(a);
    return
  } else {
    console.log(0)
  }
}

Chinchirorin(2, 5, 2) // 5
Chinchirorin(4, 5, 6) // 0
Chinchirorin(1, 1, 1) // 1