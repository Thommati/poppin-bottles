const bottles = require('./bottles');
const investment = process.argv[2];

const printBottleReport = bottleData => {
  const reportString = `
  TOTAL BOTTLES: ${bottleData.totalBottles}
  TOTAL PURCHASED: ${bottleData.purchased}
  TOTAL EARNED:
    BOTTLES: ${bottleData.recycling.bottles}
    CAPS: ${bottleData.recycling.caps}
  REMAINING:
    BOTTLES: ${bottleData.remaining.bottles}
    CAPS: ${bottleData.remaining.caps}
 `;

 console.log(reportString);
};

if (investment !== undefined) {
  const bottleData = bottles(+investment);
  printBottleReport(bottleData);
}
