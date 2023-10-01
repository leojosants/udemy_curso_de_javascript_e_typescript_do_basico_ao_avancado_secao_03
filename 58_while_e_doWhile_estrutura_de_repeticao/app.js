// while
(() => {

    function example01() {

        let i = 0;

        while (i <= 10) {
            console.log(i);
            i++;
        }

        example01()
    }

})();


// while
(() => {

    function example02() {

        const first_name = 'Leonardo';

        let i = 0;

        while (i < first_name.length) {
            console.log(first_name[i]);
            i++;
        }

        example02()
    }

})();


// while
(() => {

    function example02() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 1;
        const maximum = 50;
        let random_number = generateRandomNumber(minimum, maximum);

        let count = 0;

        while (random_number !== 10) {
            random_number = generateRandomNumber(minimum, maximum);
            console.log(`Número de execução(s) ${count + 1}: ${random_number}`);
            count++;
        }

        example02();
    }

})();


// do while
(() => {

    function example03() {

        const generateRandomNumber = (minimum, maximum) => {
            return Math.floor(Math.random() * (maximum - minimum) + minimum);
        };

        const minimum = 1;
        const maximum = 50;

        let random_number = generateRandomNumber(minimum, maximum);
        let count = 0;

        do {
            random_number = generateRandomNumber(minimum, maximum);
            console.log(`Número de execução(s) ${count + 1}: ${random_number}`);
            count++;
        } while (random_number !== 10);

    }

    example03();

})();