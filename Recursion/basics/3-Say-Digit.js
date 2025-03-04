const digitWords = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];

function sayDigit(n) {
  if (n === 0) return "";

  let digit = n % 10;
  let result = sayDigit(Math.floor(n / 10)); // Recursive call

  return (result + " " + digitWords[digit]).trim();
}

// Example usage
console.log(sayDigit(1234)); // Output: "One Two Three Four"
