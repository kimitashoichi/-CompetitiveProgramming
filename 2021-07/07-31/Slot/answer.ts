// 問題URL
// https://atcoder.jp/contests/abc189/tasks/abc189_a

function slot(slot: string) {
  const slotStrings = slot.split('');
  const flag = slotStrings.every((value: string) => {
    if (value === slotStrings[0]) {
      return true;
    } else {
      return false;
    }
  });

  if(flag === true) {
    console.log('Won');
  } else {
    console.log('Lost');
  }
}

slot('SSS'); // Won
slot('WVW'); // Lost