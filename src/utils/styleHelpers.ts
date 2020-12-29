const px2remProportion = 1 / 10;
const basicPxUnit = 4;

export function unit(size: number) {
  size *= basicPxUnit;
  return `${size * px2remProportion}rem`;
}

export function precision(size: number) {
  return `${size * px2remProportion}rem`;
}
