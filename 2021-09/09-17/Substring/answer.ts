// 問題URL
// https://atcoder.jp/contests/abc177/tasks/abc177_b

function substring(S: string, T: string) {
  const targetString = S;
  const judege = targetString.includes(T);
  if (judege) {
    console.log(0);
    return;
  }

  let answer = 0;
  let serchString = T;
  const serchStringLength = T.length;

  for (let i = 1; i < serchStringLength; i++) {
    let loopString = serchString.slice(0, -i);
    let loopJudege = targetString.includes(loopString);
    if (loopJudege) {
      answer = serchStringLength - loopString.length;
      break;
    }
  }

  if (answer === 0) {
    console.log(serchStringLength, 'a');
  } else {
    console.log(answer);
  }
}

// 検索対象文字列を１文字づつ減らして、targetStringに検索をかける

substring('cabacc', 'abc');
substring('codeforces', 'atcoder');