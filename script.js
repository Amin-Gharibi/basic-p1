const number = +prompt("Please enter a number:")
let isPrime;

if (!isNaN(number)) {
    for (let i = 2; i < number; i++) {
        isPrime = true
        for (let j = 2; j < i; j++) {
            if (isPrime) {
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
