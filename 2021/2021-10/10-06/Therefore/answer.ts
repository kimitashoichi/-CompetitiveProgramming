// 問題URL
// https://atcoder.jp/contests/abc168/tasks/abc168_a

function therefore(N: number) {
  const lastNumber = Number(N.toString().split('').slice(-1)[0]);
  const callOfHon = [2,4,5,7,9].includes(lastNumber);
  const callOfPon = [0,1,6,8].includes(lastNumber);
  const callOfBon = [3].includes(lastNumber);

  if (callOfHon) {
    console.log('hon');
  } else if (callOfPon) {
    console.log('pon');
  } else if (callOfBon) {
    console.log('bon');
  }
}

therefore(16); // pon
therefore(2); // hon
therefore(183); // bon