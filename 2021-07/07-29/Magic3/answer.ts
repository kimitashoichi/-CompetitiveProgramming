// 問題URL
// https://atcoder.jp/contests/abc190/tasks/abc190_b

interface MagicList {
  time: number;
  damage: number;
}

function magic3(S: number, D: number, magic: MagicList[]) {
  const requiredTime = S;
  const requiredDamage = D;

  for (let i = 0; i < magic.length; i++) {
    if (magic[i].time < requiredTime && magic[i].damage > requiredDamage) {
      console.log('Yes', `The magic number is ${i + 1} !`);
      return;
    }
  }

  console.log('No');
}

const questionOne: MagicList[] = [
  {
    time: 5,
    damage: 5
  },
  {
    time: 15,
    damage: 5
  },
  {
    time: 5,
    damage: 15
  },
  {
    time: 15,
    damage: 15
  },
]

const questionTwo: MagicList[] = [
  {
    time: 691,
    damage: 997
  },
  {
    time: 593,
    damage: 273
  },
  {
    time: 691,
    damage: 273
  },
]

const questionThree: MagicList[] = [
  {
    time: 10,
    damage: 11
  },
  {
    time: 12,
    damage: 67
  },
  {
    time: 192,
    damage: 79
  },
  {
    time: 154,
    damage: 197
  },
  {
    time: 142,
    damage: 158
  },
  {
    time: 20,
    damage: 25
  },
  {
    time: 17,
    damage: 108
  },
]


magic3(9, 9, questionOne); // Yes
magic3(691, 273, questionTwo); // No
magic3(100, 100, questionThree); // Yes