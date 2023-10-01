(() => {

    function example01() {
        console.log(not_exist); // ReferenceError: not_exist is not defined
        example01();
    };

})();


(() => {

    function example02() {
        try {
            console.log(not_exist);
        }
        catch (error) {
            console.log('"not_exist" não foi definida / não existe.');
            console.log(error);
        };

        example02();
    };

})();


// throw
(() => {

    function example03() {

        const sum = (first_number, second_number) => {

            if ((typeof (first_number) !== 'number') || (typeof (second_number) !== 'number')) {
                throw ('Os valores informados precisam ser números');
            };

            return first_number + second_number;
        };

        // console.log(sum(1, '3'));
        console.log(sum(1, 3));

        example03();
    };

})();


// throwing personalized error 
(() => {

    function example04() {

        const sum = (first_number, second_number) => {

            if ((typeof (first_number) !== 'number') || (typeof (second_number) !== 'number')) {
                throw new Error('Os valores informados precisam ser números');
            };

            return first_number + second_number;
        };

        try {
            console.log(sum(1, 3));
            console.log(sum(1, '3'));
        }
        catch (error) {
            // console.log(error);
        }
    };

    example04();

})();