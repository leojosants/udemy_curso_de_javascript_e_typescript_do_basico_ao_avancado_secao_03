(() => {
    function example01() {
        console.log('Linha 0');
        console.log('Linha 1');
        console.log('Linha 2');
        console.log('Linha 3');
        console.log('Linha 4');
        console.log('Linha 5');

        console.log();

        for (let i = 0; i <= 5; i++) {
            console.log(`Linha ${i}`);
        };
        example01();
    };

    function example02() {
        const start = 0;
        const end = 10;
        const step = 2;

        for (let i = start; i <= end; i += step) {
            console.log(`Linha ${i}`);
        };
        example02();
    };

    function example03() {
        const start = 10;
        const end = 5;
        const step = 2;

        for (let i = start; i >= end; i -= step) {
            console.log(`Linha ${i}`);
        };
        example03();
    };

    function example04() {
        const start = 0;
        const end = 10;
        const step = 1;

        for (let i = start; i <= end; i += step) {
            if (i % 2 === 0) {
                console.log(`Linha ${i}`);
            };
        };
        example04();
    };

    function example05() {
        const fruits = ['Banana', 'Apple', 'Orange', 'Lemon'];

        for (let i = 0; i < fruits.length; i++) {
            console.log(`${i}: ${fruits[i]}`);
        };
    };
    example05();
})();