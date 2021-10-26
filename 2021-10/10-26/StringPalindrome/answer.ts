// 問題URL
// https://atcoder.jp/contests/abc159/tasks/abc159_b

function stringPalindrome (S: string) {
  const sptitStrings = S.split('');
  const reverseAll = [...sptitStrings].reverse();
  const firstCondition = [...sptitStrings].slice(0, 3);
  const secondCondition = [...sptitStrings].slice(-3);

  const judgeSameStrings = (str: string[]): boolean => {
    const reverse = [...str].reverse();
    if (str.toString() === reverse.toString()) {
      return true;
    }
    return false;
  }

  if (judgeSameStrings(reverseAll) && judgeSameStrings(firstCondition) && judgeSameStrings(secondCondition)) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

stringPalindrome('akasaka'); // Yes
stringPalindrome('level'); // No
stringPalindrome('atcoder'); // No