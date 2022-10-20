function flatten(array) {
  const result = [];

  array.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    }
    else {
      result.push(item);
    }
  });

  return result;
}

const testCases = [
  [1, [2, [3]], 4],
  [],
  [[10], [11], [12]],
  [0],
  [-2, -1, 0, 1, 2],
  [[[[[[[18]]]]]]],
  [, , , 20]
];

testCases.forEach(testCase => {
  console.log(`actual array: ${JSON.stringify(testCase)} \n result: ${flatten(testCase)}`);
});
