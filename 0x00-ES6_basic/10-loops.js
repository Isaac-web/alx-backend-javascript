export default function appendToEachArrayValue(array, appendString) {
  const list = [];
  for (let element of array) {
	list.push(`${appendString}${element}`);
  }

  return list;
}
