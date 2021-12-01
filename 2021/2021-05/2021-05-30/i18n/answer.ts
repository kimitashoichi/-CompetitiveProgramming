// 問題URL
// https://atcoder.jp/contests/abc069/tasks/abc069_b

function wordAbbreviation (s: string) {
  let centerNumber = s.length - 2;
  let targetArray = s.split("");
  let targetArrayLength = targetArray.length;

  let abbreviationWord = targetArray[0] + centerNumber.toString() + targetArray[targetArrayLength - 1];

  console.log(abbreviationWord);
}

// 文字数をカウントし-2したものが中央に入る数字
// 先頭と最終の文字列を取得
// カウントした文字数−２と先頭と最終の文字列を結合させて完成

wordAbbreviation("internationalization"); // i18n
wordAbbreviation("smiles"); // s4s
wordAbbreviation("xyz"); // x1z
