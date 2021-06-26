// 問題URL
// https://atcoder.jp/contests/abc071/tasks/abc071_b

function notFound(S: string) {
  // 文字列を辞書順にソート
  let sortedString = S.split('').sort();

  // 最終出力のために文字コードを取得
  let c = "a".charCodeAt(0);

  // 検索用の配列
  let alphabet = [];

  // 答え判定用の文字列
  let buket = [];

  // アルファベットの文字列と答え判定用の文字列を初期化
  for (let i = 0; i < 26; i++) {
    alphabet[i] = String.fromCharCode(c + i);
    buket[i] = false;
  }

  // アルファベット文字列と検索対象文字配列を全検索
  // 同様のものがあれば答え判定用のフラグを立てる
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < sortedString.length; j++) {
      if (sortedString[j] === alphabet[i]) {
        buket[i] = true;
      }
    }
  }

  // 答え判定用の配列の中で一番最初にfalseになったindex番号を取得する
  let indexNumber = buket.indexOf(false)

  // falseがなければ"None"を出力
  if (indexNumber === -1) {
    console.log('None');
  } else {
    // falseがあれば文字コードにindex番号を足した文字列を出力
    console.log(String.fromCharCode(97 + buket.indexOf(false)))
  }
}

notFound('atcoderregularcontest'); // OK
notFound('abcdefghijklmnopqrstuvwxyz'); // OK
notFound('fajsonlslfepbjtsaayxbymeskptcumtwrmkkinjxnnucagfrg'); //

// おまけ
// アルファベットの文字列配列をスマートに作成する方法
const c = "a".charCodeAt(0);
const alphabet = Array.apply(null, new Array(26).map(({v, i}) => {
  return String.fromCharCode(c + i);
}))