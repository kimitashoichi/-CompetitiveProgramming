// 問題URL
// https://atcoder.jp/contests/abc090/tasks/abc090_b

function palindromicNumbers(A: number, B: number): void {
  let answer = 0;

  for (let i = A; i <= B; i++) {
    let normalOrder = i.toString().split("");
    let reverseOrder = i.toString().split("").reverse();
    if (normalOrder.toString() === reverseOrder.toString()) {
      answer++
    }
  }

  console.log(answer);
}


function test(): void {
  let a = ["2", "2", "3", "5"];
  let b = ["2", "2", "3", "5"];
  // 配列の参照先の比較にしかならず、値の比較にはならない
  if(a === b) {
    console.log("YES1")
  }

  // 配列の値の比較になるパターン１
  if(a.toString() === b.toString()) {
    console.log("YES2")
  }

  // 配列の比較になるパターン２
  if(JSON.stringify(a) === JSON.stringify(b)){
    console.log("YES3")
  }

  // 配列の比較になるパターン３
  // ループ処理で各要素の値を比較する
}

palindromicNumbers(11009, 11332);
palindromicNumbers(31415, 92653);
// 問題考察
// 全て同じ数字になるパターンは先頭の１桁の数によって決まる
// ex) 10000 - 20000 だった場合
// 与えられている数値の範囲では回文となるパターンは4つしかない
// 10001 => 両端は同じ数値
// 10101 => 両端が同じ数値で３桁目が任意の数値
// 11011 => ３桁目だけ任意の数値で両端２桁づつが同じ数値
// 12021 => 両端とその内側が同じ数値で３桁目が任意の数値
// 11111 => 全て同じ数値


// 何もテクニック的にとかなくても全検索でカウントできる