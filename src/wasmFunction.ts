/**
 * 
 * @param numbers - a tuple of numbers, first one will be used to calculate Fibonacci's number, and another one will be added to first one 
 * @returns 
 */
export const wasmWorker = async (numbers: [number, number]) => {
  const module = await import("wasm"); // async import of wasm-pack'ed module
  const { add_two_ints, fib } = module;
  const sumResult = add_two_ints(...numbers);
  const fibResult = fib(numbers[0]);
  return { sumResult, fibResult };
};
