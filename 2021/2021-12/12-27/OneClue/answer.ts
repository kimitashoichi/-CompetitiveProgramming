// 問題URL
// https://atcoder.jp/contests/abc137/tasks/abc137_b

function oneClue(K: number, X: number) {
  let upNumbers: number[] = [];
  let downNumbers: number[] = [];

  const generateUpNumbers =  (start: number, add: number) => {
    const end = start + add; 
    for (let i = start; i < end; i++) {
      if (i !== X) {
        upNumbers.push(i);
      }
    }
  };

  const generateDownNumbers =  (start: number, add: number) => {
    const end = start - add; 
    for (let i = start; i > end; i--) {
      if (i !== X) {
        downNumbers.push(i);
      }
    }
  };

  generateUpNumbers(X, K);
  generateDownNumbers(X, K);
  const ascendingOrder = (a, b) => {
    return a - b;
  }

  const ans = upNumbers.concat(downNumbers, [X]).sort(ascendingOrder);
  console.log(ans);
}


oneClue(3, 7); // 5 6 7 8 9
oneClue(4, 0); // -3 -2 -1 0 1 2 3
oneClue(1, 100); // 100
