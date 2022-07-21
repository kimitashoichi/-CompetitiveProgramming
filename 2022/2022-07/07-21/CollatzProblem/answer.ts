/**
 * @see https://atcoder.jp/contests/abc116/tasks/abc116_b
 */

function collatzProblem (s: number) {
  let numbers = [s];
  let flag = true;
  let index = 0;
  let answer = 0;

  const evenFunc = (num: number) => {
    return num / 2;
  };
  const oddFunc = (num: number) => {
    return (num * 3) + 1;
  };

  while (flag) {
    if (numbers[index] % 2 === 0) {
      numbers.push(evenFunc(numbers[index]));
    } else {
      numbers.push(oddFunc(numbers[index]));
    }
    
    const targetNumber = numbers[index];
    const filterNum = [...numbers].filter((number) => {
      return number === targetNumber;
    });
    if (filterNum.length >= 2) {
      const answerIndex = numbers.lastIndexOf(targetNumber);
      answer = answerIndex + 1;
      flag = false;
      break;
    }

    index++;
  }

  console.log(answer);
}

collatzProblem(8); // 5
collatzProblem(7); // 18
collatzProblem(54); // 114