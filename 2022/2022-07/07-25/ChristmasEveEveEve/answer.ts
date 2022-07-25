/**
 * @see https://atcoder.jp/contests/abc115/tasks/abc115_a
 */

function christmasEveEveEve (D: number) {
  switch (D) {
    case 25:
      console.log('Christmas');
      break;
    case 24:
      console.log('Christmas Eve');
      break;
    case 23:
      console.log('Christmas Eve Eve');
      break;
    case 22:
      console.log('Christmas Eve Eve Eve');
      break;
  }
}

christmasEveEveEve(25); // Christmas
christmasEveEveEve(22); // Christmas Eve Eve Eve
