const bottles = investment => {
  if (typeof investment !== 'number' || investment < 0) {
    return 0;
  }

  // Recursive function that determines how many bottles can be redeemed based
  // on how many bottles and caps are passed in {bottles: Number, caps: Number}
  const calculateRedeemed = bottleCapObj => {
    // If there are not enough bottles are caps to redeem then return zero.
    if (bottleCapObj.bottles < 2 && bottleCapObj.caps < 4) {
      return 0;
    }

    // Calculate the number of bottles can be redeemed from the input argument
    const fromBottles = Math.floor(bottleCapObj.bottles / 2);
    const fromCaps = Math.floor(bottleCapObj.caps / 4);
    const redeemedSoFar = fromBottles + fromCaps;

    // Create a new object to represent bottles and caps available after redeeming
    // from above
    const remainingBottleCap = {
      bottles: bottleCapObj.bottles - fromBottles + fromCaps,
      caps: bottleCapObj.caps - (fromCaps * 3) + fromBottles
    };

    // Sum amount redeemed so far with however many can be redeemed from the 
    // remainingBottleCap object.
    return redeemedSoFar + calculateRedeemed(remainingBottleCap);
  };

  // Determine initial amount of bottles (and caps) can be purchased with the
  // initial investment.
  const numBottles = Math.floor(investment / 2);

  // Initial investment + how many new bottles can be purchased from redeeming
  // caps and bottles will give the total.
  return numBottles + calculateRedeemed({ bottles: numBottles, caps: numBottles });
};

module.exports = bottles;
