
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.reduce((previousValue, currentValue, index) => {
    currentValue.sort((a, b) => (index % 2 === 0 || index === 0)? a - b : b - a).map(value => previousValue.push(value));
    return previousValue;
  }, []);
}
