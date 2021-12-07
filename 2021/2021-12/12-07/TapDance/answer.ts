// 問題URL
// https://atcoder.jp/contests/abc141/tasks/abc141_b

function tapDance(S: string) {
  const even = ['R', 'U', 'D'];
  const odd = ['L', 'U', 'D'];
  const steps = S.split('');
  let answers: boolean[] = [];

  const evenMatch = (step: string) => {
    return even.includes(step);
  };

  const oddMatch = (step: string) => {
    return odd.includes(step);
  };

  for (let i = 0; i < steps.length; i++) {
    if (i % 2 !== 0) {
      answers.push(oddMatch(steps[i]));
    } else {
      answers.push(evenMatch(steps[i]))
    }
  }

  const flag = answers.every(val => val === true);
  console.log(flag ? 'Yes' : 'No');
}

tapDance('RUDLUDR'); // Yes
tapDance('DULL'); // No
tapDance('UUUUUUUUUUUUUUU'); // Yes
tapDance('ULURU'); // No
tapDance('RDULULDURURLRDULRLR'); // Yes