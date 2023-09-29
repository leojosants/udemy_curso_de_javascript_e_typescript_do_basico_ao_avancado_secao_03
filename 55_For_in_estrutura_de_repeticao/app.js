(() => {
    /*
        FOR IN - faz a leitura a partir do indice ou chave
    */

    const example01 = () => {
        const fruits = ['Banana', 'Uva', 'Morango'];

        for (let i = 0; i < fruits.length; i++) {
            console.log(i, fruits[i]);
        }
        example01();
    };

    const example02 = () => {
        const fruits = ['Banana', 'Uva', 'Morango'];

        for (let i in fruits) {
            console.log(i, fruits[i]);
        }
        example02();
    };

    const example03 = () => {
        const person = {
            first_name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
        };

        for (const key in person) {
            console.log(key, person[i])
        }
        example03();
    };

    const example04 = () => {
        const person = {
            first_name: 'Leonardo',
            last_name: 'Santos',
            age: 39,
        };

        console.log(person.first_name);
        console.log(person['first_name']);
        example04();
    };
})();