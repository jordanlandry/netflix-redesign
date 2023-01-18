export default function random(min: number, max: number, isFloat = false): number {
  const rand = min + Math.random() * (max + 1 - min);
  return isFloat ? rand : Math.floor(rand);
}
