/*eslint-disable*/
export default function cleanSet(set, str) {
  if (!str) return "";

  const matches = [];
  set.forEach((element) => {
    if (element.startsWith(str)) {
      matches.push(element.slice(str.length));
    }
  });

  return matches.join("-");
}
