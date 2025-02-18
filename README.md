# JavaScript Bug: Loose Comparison and NaN Handling

This repository demonstrates a common JavaScript bug related to loose comparison (==) and the handling of NaN (Not a Number).

## Bug Description
The `foo` function intends to handle null, numbers greater than 10, and other numbers differently. However, due to the use of loose comparison and the special nature of NaN, the function does not behave as expected when NaN is passed as an argument.  NaN is not handled correctly because it's not a number, and the loose comparison will always return false.

## Bug Reproduction
1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript environment (e.g., Node.js).
4. Observe the unexpected output for `foo(NaN)`. 

## Solution
The solution involves using strict equality (===) to explicitly check for null and using Number.isNaN() to specifically check for NaN. This ensures that the function behaves predictably in all cases.

## How to Run the Solution
1. Open `bugSolution.js`
2. Run the code using a JavaScript environment (e.g., Node.js).