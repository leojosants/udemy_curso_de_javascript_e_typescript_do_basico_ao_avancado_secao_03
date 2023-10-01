// continue with for
(() => {

    function example01() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 10
        const maximum = 101;
        const array_numbers = [];
        let find_number = Math.floor(Math.random() * 101);

        for (let i = 0; i < 10; i++) {
            let random_number = generateRandomNumber(minimum, maximum);
            array_numbers.push(random_number)
        };

        for (let number of array_numbers) {
            if (number === find_number) {
                console.log(`Número ${find_number} encontrado.`);
                continue;
            };

            console.log(number);
        };

        example01();
    };

})();


// break - with for
(() => {

    function example02() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 10
        const maximum = 101;
        const array_numbers = [];
        let find_number = Math.floor(Math.random() * 101);

        for (let i = 0; i < 10; i++) {
            let random_number = generateRandomNumber(minimum, maximum);
            array_numbers.push(random_number)
        };

        for (let number of array_numbers) {
            if (number === find_number) {
                console.log(`Número ${find_number} encontrado.`);
                break;
            };

            console.log(number);
        };

        example02();
    };

})();


// break - with while
(() => {

    function example03() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 10
        const maximum = 101;
        const array_numbers = [];
        let find_number = Math.floor(Math.random() * 101);
        let count = 0;

        for (let i = 0; i < 10; i++) {
            let random_number = generateRandomNumber(minimum, maximum);
            array_numbers.push(random_number)
        };

        while (count < array_numbers.length) {
            if (array_numbers[count] === find_number) {
                console.log(`Número ${find_number} encontrado.`);
                count++; // Attention: in the while or do while structure, always update the control variable before break or continue
                break;
            };

            console.log(array_numbers[count]);

            count++;
        };

        example03();
    };
})();


// continue - with while
(() => {

    function example03() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 10
        const maximum = 101;
        const array_numbers = [];
        let find_number = Math.floor(Math.random() * 101);
        let count = 0;

        for (let i = 0; i < 10; i++) {
            let random_number = generateRandomNumber(minimum, maximum);
            array_numbers.push(random_number)
        };

        while (count < array_numbers.length) {
            if (array_numbers[count] === find_number) {
                console.log(`Número ${find_number} encontrado.`);
                count++; // Attention: in the while or do while structure, always update the control variable before break or continue
                continue;
            };

            console.log(array_numbers[count]);

            count++;
        };

        example03();
    };

})();


// continue - with do while
(() => {

    function example04() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 10
        const maximum = 101;
        const array_numbers = [];
        let find_number = Math.floor(Math.random() * 101);
        let count = 0;

        for (let i = 0; i < 10; i++) {
            let random_number = generateRandomNumber(minimum, maximum);
            array_numbers.push(random_number)
        };

        do {
            if (array_numbers[count] === find_number) {
                console.log(`Número ${find_number} encontrado.`);
                count++; // Attention: in the while or do while structure, always update the control variable before break or continue
                continue;
            };

            console.log(array_numbers[count]);

            count++;
        } while (count < array_numbers.length);

        example04();
    };

})();


// break - with do while
(() => {

    function example04() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 10
        const maximum = 101;
        const array_numbers = [];
        let find_number = Math.floor(Math.random() * 101);
        let count = 0;

        for (let i = 0; i < 10; i++) {
            let random_number = generateRandomNumber(minimum, maximum);
            array_numbers.push(random_number)
        };

        do {
            if (array_numbers[count] === find_number) {
                console.log(`Número ${find_number} encontrado.`);
                count++; // Attention: in the while or do while structure, always update the control variable before break or continue
                break;
            };

            console.log(array_numbers[count]);

            count++;
        } while (count < array_numbers.length);

    };
    example04();

})();