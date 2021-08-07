// 問題URL
// https://atcoder.jp/contests/abc187/tasks/abc187_a

function largeDigits(A: number, B: number) {

  const convertNumberArray = (value: number): number[] => {
    let numbers: number[] = [];
    let targetArray = value.toString().split('');
    numbers = targetArray.map(element => {
      return Number(element);
    });

    return numbers;
  }

  const reducer = (accumulator: number, currentValue: number) => accumulator + currentValue;

  const aNumbers = convertNumberArray(A);
  const bNumbers = convertNumberArray(B);

  const totalA = aNumbers.reduce(reducer);
  const totalB = bNumbers.reduce(reducer);

  if (totalA > totalB) {
    console.log(totalA);
  } else if (totalA < totalB) {
    console.log(totalB);
  } else {
    console.log(totalA);
  }
}


largeDigits(123, 234); // 9
largeDigits(593, 953); // 17
largeDigits(100, 999); // 27