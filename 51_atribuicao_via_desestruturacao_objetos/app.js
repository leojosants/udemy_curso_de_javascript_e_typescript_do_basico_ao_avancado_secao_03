(() => {
    function example01() {
        const person = {
            name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
            address: {
                street: 'Rua Fidelis Guimarães',
                number: 1,
                neighborhood: 'Leite de Castro',
                city: 'São João Del Rei',
            }
        };

        const { name, last_name, age, address } = person;

        console.log(name, last_name, age, address);
        example01();
    };

    function example02() {
        const person = {
            // name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
            address: {
                street: 'Rua Fidelis Guimarães',
                number: 1,
                neighborhood: 'Leite de Castro',
                city: 'São João Del Rei',
            }
        };

        const { name } = person;

        console.log(name); // undefined
        example02();
    };

    function example03() {
        const person = {
            // name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
            address: {
                street: 'Rua Fidelis Guimarães',
                number: 1,
                neighborhood: 'Leite de Castro',
                city: 'São João Del Rei',
            }
        };

        const { name = '', last_name } = person;

        console.log(name, last_name);
        example03();
    };

    function example04() {
        const person = {
            name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
            address: {
                street: 'Rua Fidelis Guimarães',
                number: 1,
                neighborhood: 'Leite de Castro',
                city: 'São João Del Rei',
            }
        };

        const { name, last_name } = person;

        console.log(name, last_name);
        example04();
    };

    function example05() {
        const person = {
            name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
            address: {
                street: 'Rua Fidelis Guimarães',
                number: 1,
                neighborhood: 'Leite de Castro',
                city: 'São João Del Rei',
            }
        };

        const { address, address: { street, neighborhood } } = person;

        console.log(address, street, neighborhood);
        example05();
    };

    function example06() {
        const person = {
            name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
            address: {
                street: 'Rua Fidelis Guimarães',
                number: 1,
                neighborhood: 'Leite de Castro',
                city: 'São João Del Rei',
            }
        };

        const { name, ...rest } = person;

        console.log(name);
        console.log(rest);
    };

    example06();
})();
