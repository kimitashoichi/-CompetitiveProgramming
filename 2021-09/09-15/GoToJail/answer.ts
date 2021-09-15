// 問題URL
// https://atcoder.jp/contests/abc179/tasks/abc179_b


// diceの各要素をforで回す
// 連続してゾロ目の場合はカウントを１増やす
// 連続してゾロ目でない場合はカウントを０に戻す
// カウントが３になったらループを抜けて回答を出力する


function goToJail(N: number, dice: number[][]) {
  let count = 0;
  for (let i = 0; i < N; i++) {
    if (dice[i][0] === dice[i][1]) {
      count++
    } else {
      count = 0;
    }

    if (count >= 3) {
      console.log('Yes');
      break;
    }
  }

  if (count < 3) {
    console.log('No');
  }
}

const one = [
  [1, 2],
  [6, 6],
  [4, 4],
  [3, 3],
  [3, 2]
]

const two = [
  [1, 1],
  [2, 2],
  [3, 4],
  [5, 5],
  [6, 6],
]

const three = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
]

goToJail(5, one);  // Yes
goToJail(5, two);  // No
goToJail(6, three);  // Yes