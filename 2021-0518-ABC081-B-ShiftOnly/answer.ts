// 【問題概要】
// 黒板に N 個の正の整数 A1,…,AN が書かれています。
// すぬけ君は，黒板に書かれている整数がすべて偶数であるとき，次の操作を行うことができます。
// 黒板に書かれている整数すべてを，2 で割ったものに置き換える。
// すぬけ君は最大で何回操作を行うことができるかを求めてください。

// 【制約】
// 1≤N≤200
// 1≤Ai≤10*9
// 【数値例】
// 1)
// N=3
// A=(16,12,24)
// 答え: 2
// 1 回操作を行うと (8, 6, 12) になります。
// 2 回操作を行うと (4, 3, 6) になります。2 個目の 3 が奇数なため 3 回目の操作は行えません。
// 問題URL
// https://atcoder.jp/contests/abc081/tasks/abc081_b

function judgeNumberArrayEven(args: number[]): number {
  let answer = 0;
  let endFlag= false;

  // 特定の条件になるまである処理を繰り返し行う
  while(true) {
    
    // 数列を検索して２で割り切れない数がないか判定
    for (let i = 0; i < args.length; i++) {
      if (args[i] % 2 !== 0) {
        // あった場合は処理中断フラグを立てる
        endFlag = true;
      }
    }

    // 処理中断フラグがtureの場合答えを出力
    if (endFlag) {
      break;
    }

    // 処理が実行可能な場合は数列全てを２で割った数値にする
    for (let i = 0; i < args.length; i++) {
      args[i] /= 2 ;
    }

    // 処理の回数をカウントする
    answer++;
  }

  console.log(answer)
  return answer;
}

judgeNumberArrayEven([16,12,24]);