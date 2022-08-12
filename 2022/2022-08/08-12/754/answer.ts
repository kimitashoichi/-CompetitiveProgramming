// https://atcoder.jp/contests/abc114/tasks/abc114_b

function questionTwo (S: string) {
  const TARGET_NUMBER = 753;
  const arrNum = S.split('');
  let ans;

  for (let i = 0; i < arrNum.length; i++) {
    const createNumber = arrNum.slice(i, i + 3);
    if (createNumber.length > 2) {
      const convertNumber = Number(createNumber.join(''))
      const result = Math.abs(TARGET_NUMBER - convertNumber);
      
      if (i === 0) {
        ans = result;
      } else if (result < ans) {
        ans = result;
      }

    }
  }

  console.log(ans)
}

questionTwo('1234567876'); // 34
questionTwo('35753'); // 0
questionTwo('1111111111'); // 642