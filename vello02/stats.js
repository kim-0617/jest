exports.max = (numbers) => {
  return Math.max(...numbers);
};

exports.min = (numbers) => {
  return Math.min(...numbers);
};

exports.avg = (numbers) => {
  return numbers.reduce((prev, curr) => (prev += curr), 0) / numbers.length;
};

exports.sort = (numbers) => numbers.sort((a, b) => a - b);

exports.median = (numbers) => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2) {
    // 홀수
    return numbers[middle];
  }
  return (numbers[middle - 1] + numbers[middle]) / 2;
};

exports.mode = (numbers) => {
  const counts = numbers.reduce(
    (acc, current) => acc.set(current, acc.get(current) + 1 || 1),
    new Map()
  );

  const maxCount = Math.max(...counts.values());
  const modes = [...counts.keys()].filter(
    (number) => counts.get(number) === maxCount
  );

  if (modes.length === numbers.length) {
    // 최빈값이 없음
    return null;
  }

  if (modes.length > 1) {
    // 최빈값이 여러개
    return modes;
  }

  // 최빈값이 하나
  return modes[0];
};
