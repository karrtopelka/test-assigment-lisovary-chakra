const task5 = async (x, y) => {
  let a = parseInt(x);
  let b = parseInt(y);

  a = a + b;
  b = a - b;
  a = a - b;

  return { a, b };
};

export default task5;
