const number = +prompt("Please enter a number:")
let secondPower;
let isPrime;

if (!isNaN(number)) {
    for (let i = 2; i < number; i++) {
        secondPower = i ** 2
        isPrime = true
        for (let j = 2; j < secondPower; j++) {
            if (isPrime && !(i === j)) {
                isPrime = !(i % j === 0);
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }
} else {
    alert("please enter a number!")
} 

alert('check console :)')