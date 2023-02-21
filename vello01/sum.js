function sum(a, b) {
  return a + b;
}

function sumOf(numbers) {
  return numbers.reduce((prev, curr) => (prev += curr));
}

// 각각 내보내기!!
exports.sum = sum;
exports.sumOf = sumOf;
