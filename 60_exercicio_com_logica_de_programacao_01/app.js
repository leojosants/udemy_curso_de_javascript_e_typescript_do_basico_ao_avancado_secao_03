/*
    write a function that takes 2 numbers and returns the largest of them
*/


// my solution
(() => {

    function mySolution() {

        const returnsLargestNumber = (first_number, second_number) => {
            return Math.max(first_number, second_number);
        };

        const showLargestNumber = (first_number, second_number, highest_value) => {
            console.log(`O maior valor entre ${first_number} e ${second_number} é ${highest_value}`);
        };

        const first_number = Math.floor(Math.random() * 100);
        const second_number = Math.floor(Math.random() * 100);
        const highest_value = returnsLargestNumber(first_number, second_number);

        showLargestNumber(first_number, second_number, highest_value);

        mySolution();
    };

})();


// version 01
(() => {

    function version01() {

        const returnsLargestNumber = (first_number, second_number) => {

            if (first_number > second_number) {
                return first_number;
            }
            else {
                return second_number;
            };
        };

        const showLargestNumber = (first_number, second_number, highest_value) => {
        };

        const first_number = Math.floor(Math.random() * 100);
        const second_number = Math.floor(Math.random() * 100);
        const highest_value = returnsLargestNumber(first_number, second_number);

        console.log(`O maior valor entre ${first_number} e ${second_number} é: ${highest_value}`);
        showLargestNumber(first_number, second_number, highest_value);

        version01();
    };

})();


// version 02
(() => {

    function version02() {

        const returnsLargestNumber = (first_number, second_number) => {

            if (first_number > second_number) {
                return first_number;
            }

            return second_number;
        };

        const showLargestNumber = (first_number, second_number, highest_value) => {
            console.log(`O maior valor entre ${first_number} e ${second_number} é: ${highest_value}`);
        };

        const first_number = Math.floor(Math.random() * 100);
        const second_number = Math.floor(Math.random() * 100);
        const highest_value = returnsLargestNumber(first_number, second_number);

        showLargestNumber(first_number, second_number, highest_value);

        version02();
    };

})();


// version 03
(() => {

    function version03() {

        const returnsLargestNumber = (first_number, second_number) => {

            if (first_number > second_number) return first_number;

            return second_number;
        };

        const showLargestNumber = (first_number, second_number, highest_value) => {
            console.log(`O maior valor entre ${first_number} e ${second_number} é: ${highest_value}`);
        };

        const first_number = Math.floor(Math.random() * 100);
        const second_number = Math.floor(Math.random() * 100);
        const highest_value = returnsLargestNumber(first_number, second_number);

        showLargestNumber(first_number, second_number, highest_value);

        version03();
    };

})();


// version 04
(() => {

    function version04() {

        const returnsLargestNumber = (first_number, second_number) => {

            return first_number > second_number ? first_number : second_number
        };

        const showLargestNumber = (first_number, second_number, highest_value) => {
            console.log(`O maior valor entre ${first_number} e ${second_number} é: ${highest_value}`);
        };

        const first_number = Math.floor(Math.random() * 100);
        const second_number = Math.floor(Math.random() * 100);
        const highest_value = returnsLargestNumber(first_number, second_number);

        showLargestNumber(first_number, second_number, highest_value);

        version04();
    };

})();


// version 05
(() => {

    function version05() {

        const returnsLargestNumber = (first_number, second_number) => first_number > second_number ? first_number : second_number;

        const showLargestNumber = (first_number, second_number, highest_value) => {
            console.log(`O maior valor entre ${first_number} e ${second_number} é: ${highest_value}`);
        };

        const first_number = Math.floor(Math.random() * 100);
        const second_number = Math.floor(Math.random() * 100);
        const highest_value = returnsLargestNumber(first_number, second_number);

        showLargestNumber(first_number, second_number, highest_value);
    };

    version05();

})();