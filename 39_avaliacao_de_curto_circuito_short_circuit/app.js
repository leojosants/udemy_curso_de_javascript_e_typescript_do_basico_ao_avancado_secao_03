(() => {
    /*
        FALSY   =>    false, 0, '', "", ``, null, undefined, NaN
    */

    // FLASY    false
    function example01() {
        console.log('Leonardo' && false && 'João');
        example01();
    };

    // FLASY    0
    function example02() {
        console.log('Leonardo' && 0 && 'João');
        example02();
    };

    // FLASY    ''
    function example03() {
        console.log('Leonardo' && '' && 'João');
        example03();
    };

    // FLASY    ""
    function example04() {
        console.log('Leonardo' && "" && 'João');
        example04();
    };

    // FLASY    ``
    function example05() {
        console.log('Leonardo' && `` && 'João');
        example05();
    };

    // FLASY    null
    function example06() {
        console.log('Leonardo' && null && 'João');
        example06();
    };

    // FLASY    undefined
    function example07() {
        console.log('Leonardo' && undefined && 'João');
        example07();
    };

    // AND
    function example08() {
        function sayHi() {
            return 'Oi';
        };

        const will_execute = false;

        console.log(will_execute && sayHi());
        example08();
    };

    // AND
    function example09() {
        function sayHi() {
            return 'Oi';
        };

        const test = 'teste';

        console.log(test && sayHi());
        example09();
    };

    // AND
    function example10() {
        console.log(0 || false || null || 'Leonardo' || true);
        example10();
    };

    // OR
    function example11() {
        const user_color = null;
        const default_color = user_color || 'black';
        console.log(default_color);
        example11();
    };

    // OR
    function example11() {
        const user_color = 'red';
        const default_color = user_color || 'black';
        console.log(default_color);
        example11();
    };

    // OR
    function example12() {
        const a = 0;
        const b = null;
        const c = 'false';
        const d = false;
        const e = NaN;

        console.log(a || b || c || d || e);
        console.log(typeof (a || b || c || d || e));
        example12();
    };

    // OR
    function example13() {
        const a = 0;
        const b = null;
        const c = false;
        const d = false;
        const e = NaN;

        console.log(a || b || c || d || e);
        example13();
    };

    // OR
    function example14() {
        const a = 0;
        const b = null;
        const c = false;
        const d = false;
        const e = NaN;

        console.log(a || b || c || 'Leonardo' || d || e);
    };
    example14();
})();