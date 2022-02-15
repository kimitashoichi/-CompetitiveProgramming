// 問題URL
// https://atcoder.jp/contests/abc129/tasks/abc129_a

function airplane (P: number, Q: number, R: number) {
  let allDistance = [P, Q, R];
  const asc = (a, b) => {
    return a - b;
  }
  const ascDistance = allDistance.sort(asc);
  console.log(ascDistance[0] + ascDistance[1]);
}

airplane(1, 3, 4); // 4
airplane(3, 2, 3); // 5