(() => {
    function example01() {
        /* if - else */
        function checkRange(number, minimum_range, maximum_range) {
            let message = '';

            if (number >= minimum_range && number <= maximum_range) {
                message = `O número '${number}', está entre ${minimum_range} e ${maximum_range}.`;
            }
            else {
                message = `O número '${number}', não está entre ${minimum_range} e ${maximum_range}.`;
            };

            return message;
        };

        const number = Math.floor(Math.random() * 101);
        const minimum_range = Math.floor(Math.random() * 25);
        const maximum_range = Math.floor(Math.random() * (53) + 26);
        const result = checkRange(number, minimum_range, maximum_range);

        console.log(result);
        example01();
    };

    /* if - elseif - else */
    function example02() {
        function checkRange(number) {
            let message = '';

            if ((number >= 0) && (number <= 5)) {
                message = `O número '${number}', está entre 0 e 5.`;
            }
            else if ((number >= 6) && (number <= 8)) {
                message = `O número '${number}', está entre 6 e 8.`;
            }
            else if ((number >= 9) && (number <= 11)) {
                message = `O número '${number}', está entre 9 e 11.`;
            }
            else  {
                message = `O número '${number}', não está entre o e 11.`;
            };

            return message;
        };

        const number = Math.floor(Math.random() * 13);
        const result = checkRange(number);

        console.log(result);
    };
    example02();
})();