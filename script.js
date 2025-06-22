let numberInput = prompt("Enter integer numbers:");

if (numberInput === null || numberInput.trim() === "") {
  alert("You did not enter anything. Please try again.");
} else if (numberInput.length > 1 && numberInput[0] === "0") {
  alert("Error: numbers should not start with leading zeros!");
} else {
  let N = Number(numberInput);
  if (isNaN(N)) {
    alert("You need to enter a number!");
  } else if (!Number.isInteger(N)) {
    alert("Please enter an integer number!");
  } else {
    let output = "";
    if (N >= 0) {
      for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
          output += i + " ";
        } else {
          break;
        }
      }
    }
    alert(
      `The numbers between 1 and 100 whose square is less than or equal to ${N} are: ${output.trim()}`
    );
  }
}
