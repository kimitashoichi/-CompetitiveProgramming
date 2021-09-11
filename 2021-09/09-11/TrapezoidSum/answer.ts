// 問題URL
// https://atcoder.jp/contests/abc181/tasks/abc181_b

// N個のから配列を作成
// numbersのindex番号0 からmaxまでを引数の要素に追加
// 作成した配列の各要素の値を足し合わせたものの総計を出力

function trapezoidSum(N: number, numbers: number[][]) {
  // 計算用配列の初期化
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push([]);
  }

  // 合計を算出するための配列の作成
  let ans = 0;
  for (let i = 0; i < N; i++) {
    let start = numbers[i][0];
    let end = numbers[i][1];
    for (let j = start; start <= end; start++) {
      ans += start;
    }
  }

  console.log(ans)
}

// 配列の最初の要素の値から最後の要素の値まで1づつ増やした配列を作成する
const a = [1, 10];

const inputExampleOne = [
  [1, 3],
  [3, 5],
];

const inputExampleTwo = [
  [11, 13],
  [17, 47],
  [359, 44683]
];

const inputExampleThree = [
  [1, 1000000],
]

trapezoidSum(2, inputExampleOne); // 18
trapezoidSum(3, inputExampleTwo); // 998244353
trapezoidSum(1, inputExampleThree); // 500000500000