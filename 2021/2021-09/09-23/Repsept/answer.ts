// 問題URL
// https://atcoder.jp/contests/abc174/tasks/abc174_c

function repsept(K: number) {
  let answer = 0;
  // 与えられた値が偶数の場合は数列に含まれないので即終了
  if (K % 2 === 0) {
    console.log(-1);
    return;
  }

  // 文字列変換
  const convertToString = (x: number): string => {
    const target = x.toString()
    return target;
  }

  // 数列に含まれるか確認後、含まれる場合は桁数を返却
  const checkNumbers = (x: string) => {
    const mathcTest = /'7'+/.test(x);
    if (mathcTest) {
      const targetArray = x.split('');
      answer = targetArray.length;
      return true;
    }
    return false;
  }

  let multiply = 1;

  while (true) {
    const verificationValue = K * multiply;
    console.log(verificationValue);
    if (checkNumbers(convertToString(verificationValue))) {
      console.log(answer);
      break;
    }
    multiply++
  }
}

repsept(101); // 4
repsept(2); // -1
repsept(999983); // 999982

// K * x = 数列の値
// x を１づつ増やしてKにかける
// 計算結果を文字列化して、全てが7であるか確認
// ７である場合は桁数を出力

// 全検索で時間をかければ理論上は出力できるが、桁数が大きくなった場合やばい
// ⇨ 公式解説を見ると数学的知識が必要たっだ
