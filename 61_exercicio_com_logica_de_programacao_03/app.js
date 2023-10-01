/*
    Write a function that takes a number and returns the following:
        - number is divisible by 3: Fizz
        - number is divisible by 5: Buzz
        - number is divisible by 3 and 5: FizzBuzz
        - number is NOT divisible by 3 and 5: returns the number itself
        - check if the number is really a number: returns the number itself
        - use a function with numbers from 0 to 100
*/


// my solution
(() => {

    function mySolution() {

        const fizzBuzz = (number) => {

            // number is divisible by 3 and 5: FizzBuzz
            if ((number % 3 === 0) && (number % 5 === 0)) return 'FizzBuzz';

            // number is NOT divisible by 3 and 5: returns the number itself
            if (!(number % 3 === 0) && !(number % 5 === 0)) return number;

            // number is divisible by 3: Fizz
            if (number % 3 === 0) return 'fizz';

            //number is divisible by 5: Buzz
            if (number % 5 === 0) return 'Buzz';

            // check if the number is really a number: returns the number itself
            if (typeof number !== 'number') return number;

        };

        for (let i = 0; i <= 100; i++) {
            console.log(i, fizzBuzz(i));
        };

    };

    mySolution();

})();