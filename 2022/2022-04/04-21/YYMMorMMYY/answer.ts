// 問題URL
// https://atcoder.jp/contests/abc126/tasks/abc126_b

import { copyFile } from "fs";

function YYMMorMMYY (S: number) {
  const firstTwoDigits = Number(S.toString().slice(0, 2));
  const afterTwoDigits = Number(S.toString().slice(2, 4));
  const MAX_MONTH = 12;
  const NONE_VALUE = 0;

  const YYMM = () => {
    const year = (firstTwoDigits === NONE_VALUE || firstTwoDigits > MAX_MONTH) ? true : false;
    const month = (afterTwoDigits !== NONE_VALUE && afterTwoDigits <= MAX_MONTH) ? true : false;
    return (year && month) ? true : false;
  }

  const MMYY = () => {
    const year = (afterTwoDigits === NONE_VALUE || afterTwoDigits > MAX_MONTH) ? true : false;
    const month = (firstTwoDigits !== NONE_VALUE && firstTwoDigits <= MAX_MONTH) ? true : false;
    return (year && month) ? true : false;
  }

  const AMBIGUOUS = () => {
    const year = (firstTwoDigits !== NONE_VALUE && firstTwoDigits <= MAX_MONTH) ? true : false;
    const month = (afterTwoDigits !== NONE_VALUE && afterTwoDigits <= MAX_MONTH) ? true : false;
    return (year && month) ? true : false;
  }

  if (YYMM()) {
    console.log('YYMM');
  } else if (MMYY()) {
    console.log('MMYY');
  } else if (AMBIGUOUS()) {
    console.log('AMBIGUOUS');
  } else {
    console.log('NA');
  }
}

YYMMorMMYY(1905); // YYMM
YYMMorMMYY(1700); // NA