// https://atcoder.jp/contests/abc109/tasks/abc109_b

function shiritori (N: number, W: string[]) {
  const duplication = W.length === new Set(W).size;
  if (!duplication) {
    console.log('No');
    return;
  }

  let flag = true;
  for (let i = 1; i < W.length; i++) {
    const prev = W[i - 1].slice(-1);
    const current = W[i].slice(0, 1);
    if (prev === current) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
  console.log(flag ? 'Yes' : 'No');
}

shiritori(4, 
  ['hoge',
  'english',
  'hoge',
  'enigma']); // No

shiritori(9, 
  ['basic',
  'c',
  'cpp',
  'php',
  'python',
  'nadesico',
  'ocaml',
  'lua',
  'assembly'
]); // Yes

shiritori(8, 
  ['a',
  'aa',
  'aaa',
  'aaaa',
  'aaaaa',
  'aaaaaa',
  'aaa',
  'aaaaaaa'
]); // No

shiritori(3, 
  ['abc',
  'arc',
  'agc'
]); // No