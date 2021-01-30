const task1 = (rows, icon) => {
  let tree = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows + rows - 1; j++) {
      if (j <= rows - i || j >= rows + i) {
        tree += " ";
      } else {
        tree += `${icon}`;
      }
    }
    tree += "\n";
  }
  return tree;
};

export default task1;
