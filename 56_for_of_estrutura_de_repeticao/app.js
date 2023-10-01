/*
    FOR CLASSIC 
        - usually with iterables 
        - array or strings

    FOR OF  
        - specific to iterable objects 
        - string, array or objects
        - returns the value itself 

    FOR IN 
        - Return indice or key 
        - string, array or objects
*/

// for classic
(() => {
    function example01() {

        const full_name = 'Leonardo Santos';

        for (let i = 0; i < full_name.length; i++) {
            console.log(full_name[i]);
        }
        example01();
    };

})();

// for in
(() => {
    function example02() {

        const full_name = 'Leonardo Santos';

        for (let i in full_name) {
            console.log(full_name[i]);
        }
        example02();
    };

})();

// for of
(() => {
    function example03() {

        const full_name = 'Leonardo Santos';

        for (let key of full_name) {
            console.log(key);
        }

        example03();
    };

})();

// for each
(() => {
    function example04() {

        const names_array = ['Leonardo', 'João', 'Lucas', 'Maria'];

        names_array.forEach((name, index) => {
            console.log(name, index);
        });
        
        example04();
    };

})();

// for in with objects
(() => {
    function example05() {

        const person = {
            first_name: 'Leonardo',
            last_name:'Santos',
        };

        for (let key in person) { 
            console.log(key,person[key]);
        }
    };

    example05();

})();