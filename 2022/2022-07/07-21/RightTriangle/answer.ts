/**
 * @see https://atcoder.jp/contests/abc116/tasks/abc116_a
 */

function rightTriangle (A: number, B: number, C: number) {
  const edges = [A, B, C].sort((a,b) => (a < b ? -1 : 1));
  const answer = (edges[0] * edges[1]) / 2;
  console.log(answer);
}

rightTriangle(3, 4, 5); // 6
rightTriangle(5, 12, 13); // 30
rightTriangle(45, 28, 53); // 630