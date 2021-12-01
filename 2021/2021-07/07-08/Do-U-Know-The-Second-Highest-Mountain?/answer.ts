// 問題URL
// https://atcoder.jp/contests/abc201/tasks/abc201_b

function mountain(N: number, mountain: {name: string, hight: number}[]) {
  const compare = (a, b) => {
    const heightA = a.hight;
    const heightB = b.hight;

    let comparison = 0;
    if (heightA > heightB) {
      comparison = -1;
    } else if (heightA < heightB) {
      comparison = 1;
    }

    return comparison;
  }

  const sortedMountains = mountain.sort(compare);
  console.log(sortedMountains[1].name);
}

let mountainsA = [
  {name: "K2", hight: 8611},
  {name: "Everest", hight: 8849},
  {name: "Kangchenjunga", hight: 8586},
]

let mountainsB = [
  {name: "Kita", hight: 3193},
  {name: "Aino", hight: 3189},
  {name: "Fuji", hight: 3776},
  {name: "Okuhotaka", hight: 3190},
]

let mountainsC = [
  {name: "QCFium", hight: 2846},
  {name: "chokudai", hight: 2992},
  {name: "kyoprofriends", hight: 2432},
  {name: "penguinman", hight: 2390},
]



mountain(3, mountainsA); // K2
mountain(4, mountainsB); // Kita
mountain(4, mountainsC) // QCFium