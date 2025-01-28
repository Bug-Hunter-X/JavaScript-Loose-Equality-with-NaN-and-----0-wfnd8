# JavaScript Loose Equality with NaN and +/- 0

This repository demonstrates a common pitfall in JavaScript: the unexpected behavior of the loose equality operator (==) when comparing NaN (Not a Number) and 0 with -0.

## The Problem

The loose equality operator (==) in JavaScript performs type coercion before comparison. This can lead to unexpected results, particularly when comparing NaN or 0 and -0:

* `NaN == NaN` evaluates to `false` (NaN is not equal to itself).
* `0 == -0` evaluates to `true` (although they are technically different).

The example demonstrates this with the function `foo`. The strict equality operator (===) is preferred for these comparisons.

## The Solution

The solution file replaces loose equality (==) with strict equality (===). Strict equality does not perform type coercion and provides the correct comparisons for all cases.

## Usage

Clone the repository and run the JavaScript files using Node.js or a browser console.