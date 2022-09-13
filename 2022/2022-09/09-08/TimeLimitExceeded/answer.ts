// https://atcoder.jp/contests/abc112/tasks/abc112_b

function timeLimitExceeded (N: number, T: number, list: {c: number, t: number}[]) {
  const LIMIT = T;
  const newLists = list.filter((item) => item.t <= LIMIT);
  let answer;
  
  if (newLists.length >= 2) {
    newLists.sort((a, b) => {
      return a.c - b.c;
    });
    answer = newLists[0].c;
  } else if (newLists.length === 0) {
    answer = 'TLE';
  }
  console.log(answer);
}

const q1 = [
  {
    c:7,
    t:60
  },
  {
    c:1,
    t:80
  },
  {
    c:4,
    t:50
  }
];

const q2 = [
  {
    c:1,
    t:1000
  },
  {
    c:2,
    t:4
  },
  {
    c:3,
    t:1000
  },
  {
    c:4,
    t:500
  }
];

const q3 = [
  {
    c:25,
    t:8
  },
  {
    c:5,
    t:9
  },
  {
    c:4,
    t:10
  },
  {
    c:1000,
    t:1000
  },
  {
    c:6,
    t:1
  }
];

timeLimitExceeded(3, 70, q1); // 4
timeLimitExceeded(4, 3, q2); // TLE
timeLimitExceeded(5, 9, q3); // 5