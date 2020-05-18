export const averageOf = (arr) =>
  arr.reduce((tot, x) => tot + x, 0) / arr.length;
