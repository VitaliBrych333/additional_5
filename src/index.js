module.exports = function check(str, symbolConfig) {
  const arrayStack = [];

  for (let i = 0; i < str.length; i++) {
      const symbol = str[i];
      const last = arrayStack[arrayStack.length - 1];
      
      if(!last) {
        arrayStack.push(symbol);
        continue;
      }

      const closedSymbol = closed(symbol, symbolConfig);
      const openedSymbol = opened(symbol, symbolConfig);
      const opposite = getOpposite(symbol, symbolConfig);

      if (opposite === symbol && last === symbol) {
        arrayStack.pop();
        continue;
      }

      if (openedSymbol) {
        arrayStack.push(symbol);
        continue;
      }

      if (closedSymbol) {
        if (getOpposite(last, symbolConfig) !== symbol) {
          return false;
        } else {
          arrayStack.pop();
            continue;
          }
      }
  }
  return arrayStack.length === 0;
}

function opened(element, symbolConfig) {
  return symbolConfig.some(pair => pair[0] === element);
}

function closed(element, symbolConfig) {
  return symbolConfig.some(pair => pair[1] === element);
}

function getOpposite(element, symbolConfig) {
  const first = symbolConfig.find(config => config[0] === element);
  const second = symbolConfig.find(config => config[1] === element);
  return (first && first[1]) || (second && second[0]);
}
