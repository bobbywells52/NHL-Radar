export function shuffleArray(arr:number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap the elements
  }
  return arr;
}