/*
    logical operators
        &&      AND     E
        ||      OR      OU
        !       NOT     NÃO
*/

function startApp() {
    //  AND     &&      --> condition: leaving home
    function example01() {
        const have_money = true;
        const sunny = true;
        const going_out = have_money && sunny;
        console.log('Vou sair de casa: ', going_out);
        example01();
    };

    //  OR      ||      --> condition: leaving home
    function example02() {
        const have_money = false;
        const sunny = true;
        const going_out = have_money && sunny;
        console.log('Vou sair de casa: ', going_out);
        example02();
    };

    //  NOT      !      --> condition: leaving home
    function example03() {
        const have_money = true;
        const sunny = true;
        const going_out = !have_money && sunny;
        console.log('Vou sair de casa: ', going_out);
        example03();
    };

    // condition: login user
    function example04() {
        const user = 'Leonardo';
        const password = (Math.floor(Math.random() * 5)).toString();
        const logged = (user === 'Leonardo') && (password === '0');
        console.log('Usuário logado: ', logged);
        example04();
    };

    function comparisonAND() {
        /* true and true */
        const first_situation = {
            test_01: true,
            test_02: true,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`\n${this.test_01}  && ${this.test_02}  = ${result}`);
            },
        };

        /* true and false */
        const second_situation = {
            test_01: true,
            test_02: false,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`${this.test_01}  && ${this.test_02} = ${result}`);
            },
        };

        /* false and false */
        const third_situation = {
            test_01: false,
            test_02: false,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`${this.test_01} && ${this.test_02} = ${result}`);
            },
        };

        /* false and true */
        const fourth_situation = {
            test_01: false,
            test_02: true,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`${this.test_01} && ${this.test_02}  = ${result}`);
            },
        };

        first_situation.status();
        second_situation.status();
        third_situation.status();
        fourth_situation.status();
    };
    comparisonAND();

    function comparisonOR() {
        /* true and true */
        const first_situation = {
            test_01: true,
            test_02: true,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`\n${this.test_01}  || ${this.test_02}  = ${result}`);
            },
        };

        /* true and false */
        const second_situation = {
            test_01: true,
            test_02: false,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`${this.test_01}  || ${this.test_02} = ${result}`);
            },
        };

        /* false and false */
        const third_situation = {
            test_01: false,
            test_02: false,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`${this.test_01} || ${this.test_02} = ${result}`);
            },
        };

        /* false and true */
        const fourth_situation = {
            test_01: false,
            test_02: true,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`${this.test_01} || ${this.test_02}  = ${result}`);
            },
        };

        first_situation.status();
        second_situation.status();
        third_situation.status();
        fourth_situation.status();
    };  
    comparisonOR();

    function comparisonAND_NOT() {
        /* true and true */
        const first_situation = {
            test_01: true,
            test_02: true,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`\n${this.test_01}  && ${this.test_02}  = !${result}  --> ${!result}`);
            },
        };

        /* true and false */
        const second_situation = {
            test_01: true,
            test_02: false,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`${this.test_01}  && ${this.test_02} = !${result} --> ${!result}`);
            },
        };

        /* false and false */
        const third_situation = {
            test_01: false,
            test_02: false,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`${this.test_01} && ${this.test_02} = !${result} --> ${!result}`);
            },
        };

        /* false and true */
        const fourth_situation = {
            test_01: false,
            test_02: true,
            status() {
                const result = this.test_01 && this.test_02;
                console.log(`${this.test_01} && ${this.test_02}  = !${result} --> ${!result}`);
            },
        };

        first_situation.status();
        second_situation.status();
        third_situation.status();
        fourth_situation.status();
    };
    comparisonAND_NOT();

    function comparisonOR_NOT() {
        /* true and true */
        const first_situation = {
            test_01: true,
            test_02: true,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`\n${this.test_01}  || ${this.test_02}  = !${result}  --> ${!result}`);
            },
        };

        /* true and false */
        const second_situation = {
            test_01: true,
            test_02: false,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`${this.test_01}  || ${this.test_02} = !${result}  --> ${!result}`);
            },
        };

        /* false and false */
        const third_situation = {
            test_01: false,
            test_02: false,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`${this.test_01} || ${this.test_02} = !${result} --> ${!result}`);
            },
        };

        /* false and true */
        const fourth_situation = {
            test_01: false,
            test_02: true,
            status() {
                const result = this.test_01 || this.test_02;
                console.log(`${this.test_01} || ${this.test_02}  = !${result}  --> ${!result}`);
            },
        };

        first_situation.status();
        second_situation.status();
        third_situation.status();
        fourth_situation.status();
    };  
    comparisonOR_NOT();
};
startApp();