// 問題URL
// https://atcoder.jp/contests/abc182/tasks/abc182_c

// 削った数値は残ったままの順序で判定する
// パターン1: 前から削除して

function toThree(N: number) {
  // 3の倍数か判定用
  const judgeThree = (arg: number): boolean => {
    const judgeFlag = arg % 3;
    if (judgeFlag === 0) {
      return true;
    }
    return false;
  }

  // 与えられた数がそのまま三の倍数だった場合
  if (judgeThree(N)) {
    console.log(0);
    return;
  }

  const numberOfDigits = N.toString().length;
  const arrayNum = N.toString().split('');

  // 前から１桁づつ削除した数値を返す
  const cutNumber = (curNumer: number) => {
    const copyArrayNum = arrayNum.map((val) => {
      return val;
    });
    copyArrayNum.splice(curNumer, 1);
    return Number(copyArrayNum.join(''));
  }

  let ans = 0;

  for (let i = 0; i < numberOfDigits; i++) {
    if (judgeThree(cutNumber(i))) {
      if (ans < cutNumber(i)) {
        ans = cutNumber(i);
      }
    }
  }

  if (ans === 0) {
    console.log(-1);
    return;
  }

  const ansArrayNum = ans.toString().length;
  console.log(numberOfDigits - ansArrayNum);
}

// 12347
// BC
// AC
// C
// 

toThree(35); // 1
toThree(369); // 0
toThree(6227384) // 1
toThree(11) // -1