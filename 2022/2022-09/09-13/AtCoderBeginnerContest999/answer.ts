// https://atcoder.jp/contests/abc111/tasks/abc111_a

function AtCoderBeginnerContest999 (n: number) {
  let target = n.toString().split('');
  const newTarget = target.map(value => {
    switch (value) {
      case '1':
        return '9';
      case '9':
        return '1';
    }
  });

  console.log(newTarget.join(''));
}

AtCoderBeginnerContest999(119); // 991
AtCoderBeginnerContest999(999); // 111