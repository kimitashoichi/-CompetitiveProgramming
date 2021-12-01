// 問題URL
// https://atcoder.jp/contests/abc155/tasks/abc155_b

function papersPlease(N: number, A: number[]) {
  const evenArray = A.filter((value) => value % 2 === 0);
  const check = evenArray.every((value) => value % 3 === 0 || value % 5 === 0);
  const judge = check ? 'APPROVED' : 'DENIED';
  console.log(judge);
}

papersPlease(5, [6, 7, 9, 10, 31]); // APPROVED
papersPlease(3, [28, 27, 24]); // DENIED
