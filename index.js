// run `node index.js` in the terminal

const add = require('./add');
const sub = require('./sub');

// console.log(sub(2, 3));

const a = parseInt(process.argv[2]);
const choise = process.argv[3];
const b = parseInt(process.argv[4]);
if (choise === 'ADD') {
  console.log(a + b);
} else if (choise === 'SUB') {
  console.log(a - b);
}
// } else {
//   console.log('none');
// }
