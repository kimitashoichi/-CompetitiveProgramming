// 問題URL
// https://atcoder.jp/contests/abc189/tasks/abc189_b

interface DringHistory {
  amount: number;
  alcoholic: number;
}

function alcoholic(N: number, X: number, drinks: DringHistory[]) {
  const LIMIT_AMOUNT = X;
  let alcoholIntake = 0;

  for (let i = 0; i < N; i++) {
    alcoholIntake += drinks[i].amount * (drinks[i].alcoholic / 100);
    if (alcoholIntake > LIMIT_AMOUNT) {
      console.log(i + 1);
      return;
    }
  }

  console.log(-1);
}

const questionOne: DringHistory[] = [
  {
    amount: 200,
    alcoholic: 5,
  },
  {
    amount: 350,
    alcoholic: 3, 
  }
];

const questionTwo: DringHistory[] = [
  {
    amount: 200,
    alcoholic: 5,
  },
  {
    amount: 350,
    alcoholic: 3, 
  }
]
const questionThree: DringHistory[] = [
  {
    amount: 1000,
    alcoholic: 100,
  },
  {
    amount: 1000,
    alcoholic: 100,
  },
  {
    amount: 1000,
    alcoholic: 100,
  },
]

alcoholic(2, 15, questionOne); // 2
alcoholic(2, 10, questionTwo); // 2
alcoholic(3, 1000000, questionThree) // -1
