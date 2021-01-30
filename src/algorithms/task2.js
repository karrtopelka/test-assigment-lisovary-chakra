const task2 = (a, b) => {
  if (b > a) {
    return task2(b, a);
  }
  if (!b) {
    return a;
  }
  return task2(b, a % b);
};

export default task2;
