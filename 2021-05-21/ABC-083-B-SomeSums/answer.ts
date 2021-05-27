// 【問題概要】
// 1 以上 N 以下の整数のうち、10 進法で各桁の和が A 以上 B 以下であるものについて、総和を求めてください。

// 【制約】
// 1≤N≤10*4
// 1≤A≤B≤36
// 入力はすべて整数
// 【数値例】
// 1)
// N=20
// A=2
// B=5
// 答え: 84
// 20 以下の整数のうち、各桁の和が 2 以上 5 以下なのは、2, 3, 4, 5, 11, 12, 13, 14, 20 です。これらの合計である 84 を出力します。
// 問題URL
// https://atcoder.jp/contests/abc083/tasks/abc083_b

function serchAnswer(N: number, a: number, b: number): number {
  // 1からNまで各行の和を求める
  // その中からA以上、B以下となる数値を求める
  // 条件に合致した数値を全て足し合わせたものを返り値とする

  // 条件に合致した数値を保存しておく配列
  let arr: number[] = [];

  // 最終的な答えを出力するための変数
  let answer = 0;

  for (let i = 1; i <= N; i++) {
    let condition = 0;

    // 文字列の配列に変換
    let arrNum = i.toString().split("");

    // 配列の各要素を足し合わせる
    arrNum.map((val) => {
      condition += Number(val)
    })

    // 結果がa以上、b以下を満たすか検証
    if (a <= condition && condition <= b) {
      arr.push(i)
    }
  }

  // 条件に合致した数値を足し合わせる
  arr.map((val) => {
    answer += val
  })

  console.log(answer)
  return answer;
}

serchAnswer(10, 1, 2);

