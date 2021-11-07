// 問題URL
// https://atcoder.jp/contests/abc155/tasks/abc155_a

function poor(N: number[]) {
  const check = N.every((value) => value === N[0]);
  const judge = check ? 'No' : 'Yes';
  console.log(judge);
}

poor([5, 7, 5]); // Yes
poor([4, 4, 4]); // No
poor([4, 9, 6]); // Yes 
poor([3, 3, 4]); // Yes