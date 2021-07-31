// 問題URL
// https://atcoder.jp/contests/abc188/tasks/abc188_a

function threePointShot(X: number, Y: number) {
  let dominantTeamScore;
  let inferiorTeamScore;

  if (X > Y) {
    dominantTeamScore = X;
    inferiorTeamScore = Y;
  } else {
    dominantTeamScore = Y;
    inferiorTeamScore = X;
  }

  inferiorTeamScore += 3;

  const judge = inferiorTeamScore > dominantTeamScore;

  if (judge) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}

threePointShot(3, 5) // Yes
threePointShot(16, 2) // No
threePointShot(12, 15) // No