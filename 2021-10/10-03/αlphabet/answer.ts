// 問題URL
// https://atcoder.jp/contests/abc171/tasks/abc171_a

function αlphabet(a: string) {
  const isUpperCase = (target: string): boolean => {
    return target === target.toUpperCase() ? true : false;
  }

  if (isUpperCase(a)) {
    console.log('A');
  } else {
    console.log('a');
  }
}

αlphabet('B') // A
αlphabet('a') // a