/* eslint-disable */
export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;

  if (position >= view.length || position < 0)
    throw new Error("Position outside range");

  return DataView(buffer);
}
