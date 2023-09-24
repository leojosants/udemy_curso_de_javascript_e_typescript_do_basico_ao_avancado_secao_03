/*
    Comparison Operators
        >       bigger then
        >=      bigger or equal
        <       smaller than
        <=      smaller or equal
        ==      equality (value)    **** (dangerous use) ****
        ===     strict equality (value and type)
        !=      different (value)   **** (dangerous use) ****
        !==     strict different (value and type)
*/

function startApp() {
    //  bigger then         >
    function example01() {
        const first_number = 10;
        const second_number = 5;
        const result = first_number > second_number;
        console.log(result);
        example01();
    };

    //  bigger or equal     >=
    function example02() {
        const first_number = 10;
        const second_number = 5;
        const result = first_number >= second_number;
        console.log(result);
        example02();
    };

    //  smaller than     <
    function example03() {
        const first_number = 10;
        const second_number = 5;
        const result = first_number < second_number;
        console.log(result);
        example03();
    };

    //  smaller or equal     <=
    function example04() {
        const first_number = 10;
        const second_number = 5;
        const result = first_number <= second_number;
        console.log(result);
        example04();
    };

    //  equality (value)     ==     (dangerous use)
    function example05() {
        const first_number = '10';
        const second_number = 10;
        const result = first_number == second_number;
        console.log(result);
        example05();
    };

    //  strict equality (value and type)     ===    
    function example06() {
        const first_number = '10';
        const second_number = 10;
        const result = first_number === second_number;
        console.log(result);
        example06();
    };

    //  different (value)     !=    (dangerous use)
    function example07() {
        const first_number = '10';
        const second_number = 10;
        const result = first_number != second_number;
        console.log(result);
        example07();
    };

    //  strict different (value and type)     !==
    function example07() {
        const first_number = '10';
        const second_number = 10;
        const result = first_number !== second_number;
        console.log(result);
    };
    example07();
};
startApp();