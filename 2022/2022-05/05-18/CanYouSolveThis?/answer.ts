// https://atcoder.jp/contests/abc121/tasks/abc121_b

function canYouSolveThis (N: number, M: number, C: number, B: number[], A: number[][]) {
  let answer = 0;

  const calcTotal = (numbers: number[]): number => {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i] * B[i];
    }

    total += C

    return total;
  }

  for (let i = 0; i < A.length; i++) {
    let total = calcTotal(A[i]);
    if (total > 0) {
      answer++;
    } 
  }

  console.log(answer);
}

const q1 = [
  [3, 2, 1],
  [1, 2, 2],
];

const q2 = [
  [100, 41],
  [100, 40],
  [-3, 0],
  [-6, -2],
  [18, -13],
];

const q3 = [
  [0, 100, 100],
  [100, 100, 100],
  [-100, 100, 100]
]

canYouSolveThis(2, 3, -10, [1, 2, 3], q1); // 1
canYouSolveThis(5, 2, -4, [-2, 5], q2); // 2
canYouSolveThis(3, 3, 0, [100, -100, 0], q3); // 0