const bottles = require('./bottles');
const investment = process.argv[2];

if (investment !== undefined) {
  console.log(bottles(+investment));
}
