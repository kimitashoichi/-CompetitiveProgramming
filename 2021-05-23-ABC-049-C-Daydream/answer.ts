// 【問題概要】
// 英小文字からなる文字列 S が与えられます。
// T が空文字列である状態から始めて、以下の操作を好きな回数繰り返すことで S=T とすることができるか判定してください。
// T の末尾に "dream", "dreamer", "erase", "eraser" のいずれかを追加する。

// 【制約】
// 1≤|S|≤10**5
// S は英小文字からなる
// 【数値例】
// 1)
// S = "dreameraser"
// 答え: "YES"
// "dream", "eraser" の順で TT の末尾に追加することで S=T とすることができます。
// 問題URL
// https://atcoder.jp/contests/abc049/tasks/arc065_a


// 前から検索していくとどこで区切ったら良いかわからなくなるという問題があるので、検索する文字列と検索したい文字列を全て反転させてから検索する
function searchForStrings (word: string): string {
  let targetStrings = ["dream", "dreamer", "erase", "eraser"];

  // 入力された文字列を反転
  let target = word.split("").reverse().join("");

  // 検索対象の文字列の配列の各要素を反転させる
  for (let i = 0; i < 4; i++) {
    targetStrings[i] = targetStrings[i].split("").reverse().join("");
  } 

  // 最終的な出力結果を判定するbool値
  let can = true;

  // 検索処理を継続するかどうかを判定するbool値
  let can2 = false;

  // 検索処理は継続し続ける
  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < 4; j++) {
      // 検索対象文字列から１つづつ取り出して全検索
      let stringD = targetStrings[j];

      // 入力値を区切り、検索対象文字列と同じになるのかを判定
      if(target.substr(i, stringD.length) === stringD) {
        can2 = true;
      }
    }

    // 同じものがない場合は検索処理を中断させる
    if(!can2) {
      can = false;
      break;
    }
  }

  // 最終出力
  if (can) {
    console.log("YES");
    return "YES";
  } else {
    console.log("NO");
    return "NO";
  }
}

searchForStrings("dreamerer");