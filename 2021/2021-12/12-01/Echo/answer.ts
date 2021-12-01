// 問題URL
// https://atcoder.jp/contests/abc145/tasks/abc145_b
// 前提：繰り返すのは２回だけ

function echo(N: number, S: string) {
  if (N%2 !== 0) {
    console.log('No');
  } else {
    const half = N/2;
    const targetStr = S.slice(0, half);
    const comparisonStr = S.slice(half);
  
    if (targetStr === comparisonStr) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
}

echo(6, 'abcabc'); // Yes
echo(6, 'abcadc'); // No
echo(1, 'z'); // No