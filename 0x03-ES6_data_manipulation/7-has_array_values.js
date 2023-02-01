/* eslint-disable */
export default function hasValuesFromArray(set, arr) {
  let hasValue = true;
  for (let value of arr) {
    hasValue = set.has(value);
  }

  return hasValue;
}
