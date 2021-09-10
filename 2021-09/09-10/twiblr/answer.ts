// 問題URL
// https://atcoder.jp/contests/abc182/tasks/abc182_a

function twiblr(A: number, B: number) {
  const maxFollowerNumber = 2 * A + 100;
  const followersRemaining = maxFollowerNumber - B;
  if (followersRemaining <= 0) {
    console.log('これ以上増やせません')
  } else {
    console.log(`あと${followersRemaining}人フォローできます`)
  }
}

twiblr(200, 300);
twiblr(10000, 0);