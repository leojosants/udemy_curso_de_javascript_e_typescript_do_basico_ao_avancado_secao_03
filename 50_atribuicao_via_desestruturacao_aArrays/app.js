(() => {
    function example01() {
        let letter_a = 'A'; // -> B
        let letter_b = 'B'; // -> C
        let letter_c = 'C'; // -> A

        console.log(letter_a, letter_b, letter_c);

        const result = ([letter_a, letter_b, letter_c] = [letter_b, letter_c, letter_a]);

        console.log(result);

        example01();
    };

    function example02() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const [fisrt_number, second_number] = numbers;

        console.log(fisrt_number, second_number);
        example02();
    };

    // rest
    function example03() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const [fisrt_number, second_number, ...rest] = numbers;

        console.log(fisrt_number, second_number, rest);
        example03();
    };

    function example04() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const [fisrt_number, , third_number, , fifth_number, ...rest] = numbers;

        console.log(fisrt_number, third_number, fifth_number, rest);
        example04();
    };

    function example05() {
        const number = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9]
        ];

        console.log();
        console.log(number);

        console.log();
        console.log(number[0]);
        console.log(number[0][0]);
        console.log(number[0][1]);
        console.log(number[0][2]);

        console.log();
        console.log(number[1]);
        console.log(number[1][0]);
        console.log(number[1][1]);
        console.log(number[1][2]);

        console.log();
        console.log(number[2]);
        console.log(number[2][0]);
        console.log(number[2][1]);
        console.log(number[2][2]);
        example05();
    };

    // recuperando o terceiro elemento da lista 1
    function example06() {
        const number = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9]
        ];

        const [, [, , number_six]] = number;

        console.log(number_six);
        example06();
    };

    // recuperando o terceiro elemento da lista 1
    function example07() {
        const number = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9]
        ];

        const [list_0, list_1, list_2] = number;

        console.log();
        console.log(`\t\t\t\t|____0____|  |____1____|  |____2____|`);
        console.log();
        console.log('lista number:', number);

        console.log();
        console.log('lista 0:', list_0);
        console.log('lista 0/0:', list_0[0]);
        console.log('lista 0/1:', list_0[1]);
        console.log('lista 0/2:', list_0[2]);

        console.log();
        console.log('lista 1:', list_1);
        console.log('lista 1/0:', list_1[0]);
        console.log('lista 1/1:', list_1[1]);
        console.log('lista 1/2:', list_1[2]);

        console.log();
        console.log('lista 2:', list_2);
        console.log('lista 2/0:', list_2[0]);
        console.log('lista 2/1:', list_2[1]);
        console.log('lista 2/2:', list_2[2]);
    };
    example07();
})();