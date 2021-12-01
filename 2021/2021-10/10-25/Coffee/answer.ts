// 問題URL
// https://atcoder.jp/contests/abc160/tasks/abc160_a

function coffee(S: string) {
  const splitStrings = S.split('');
  if ((splitStrings[2] === splitStrings[3]) && (splitStrings[4] === splitStrings[5])) {
      console.log('Yes');
  } else {
    console.log('NO');
  }
}

coffee('sippuu'); // Yes
coffee('iphone'); // No
coffee('coffee'); // Yes