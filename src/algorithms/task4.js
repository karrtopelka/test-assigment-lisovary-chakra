const op = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
};

const infixToPostfix = (exp) => {
  let prec = {
    "+": 2,
    "-": 2,
    "(": 1,
  };
  let stack = [];
  let postfixList = [];
  let temp = exp.replace(/ /g, "");
  let tokenList = [];
  let n = "";
  for (let i = 0; i < temp.length; i++) {
    const element = temp[i];
    if (Number(element)) {
      n += element;
    } else {
      tokenList.push(n);
      tokenList.push(element);
      n = "";
    }
  }
  tokenList.push(n);
  tokenList = tokenList.filter((a) => a !== "");
  tokenList.forEach((token) => {
    if (Number(token)) {
      postfixList.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      let topToken = stack.pop();
      while (topToken !== "(") {
        postfixList.push(topToken);
        topToken = stack.pop();
      }
    } else {
      while (
        stack.length !== 0 &&
        prec[stack[stack.length - 1]] >= prec[token]
      ) {
        postfixList.push(stack.pop());
      }
      stack.push(token);
    }
  });
  while (stack.length !== 0) {
    postfixList.push(stack.pop());
  }
  return postfixList;
};

const task4 = (ex) => {
  let stack = [];
  let arr = infixToPostfix(ex);
  arr.forEach((item) => {
    if (item in op) {
      let [b, a] = [stack.pop(), stack.pop()];
      stack.push(op[item](a, b));
    } else {
      stack.push(parseInt(item));
    }
  });
  if (isNaN(stack[stack.length - 1])) {
    return null;
  } else {
    return stack.pop();
  }
};

export default task4;
