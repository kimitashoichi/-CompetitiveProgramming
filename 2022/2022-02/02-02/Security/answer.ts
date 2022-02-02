// 問題URL
// https://atcoder.jp/contests/abc131/tasks/abc131_a

function security(S: number) {
  let flag = false;
  const securityCode = S.toString().split('');
  securityCode.map((code, index) => {
    if (index !== 0) {
      if (flag === true) return;
      flag = code === securityCode[index - 1] ? true : false;
    }
  })

  console.log(flag ? 'Bad' : 'Good');
}

security(3776); // Bad
security(8080); // Good
security(1333); // Bad
security(1124); // Bad
