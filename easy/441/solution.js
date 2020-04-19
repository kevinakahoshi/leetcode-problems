//  @param {number} n
//  @return {number}

const arrangeCoins = (n) => {
  let coinsPerRow = 1;

  while (coinsPerRow <= n) {
    n = n - coinsPerRow;
    coinsPerRow++;
  }

  return coinsPerRow - 1;
};

export default arrangeCoins;
