(() => {

    /*
        LET tem escopo de bloco { ... bloco }
        VAR tem escopo de funcao
    */

    function example01() {
        const isTrue = true;
        let name = 'Leonardo';
        var name_2 = 'Leonardo';

        if (isTrue) {
            let name = 'Santos';
            // console.log(name, name_2);

            if (isTrue) {
                let name = 'Mara';
                console.log(name, name_2);
            };
        };

        example01();
    };

    function example02() {
        const isTrue = true;
        let name = 'Leonardo';
        var name_2 = 'Leonardo';


        if (isTrue) {
            let name = 'Santos';
            var name_2 = 'Luan';

            if (isTrue) {
                var name_2 = 'Gilherme';
                let name = 'Outra coisa';

            };
        };

        console.log(name, name_2);
        example02();
    };

    // escopo de funcao
    function example03() {
        var last_name = 'Santos';

        function sayHi() {
            console.log(last_name);
        };
        sayHi();

        example03();
    };

    // escopo de funcao
    function example04() {
        const isTrue = true;

        function sayHi() {
            if (isTrue) {
                let name = 'Leonardo';
                var last_name = 'Oliveira';
            };

            console.log(last_name);
        };
        sayHi();
        example04();
    };

    // 
    function example05() {
        console.log(last_name); //undefined

        var last_name = 'Santos';
        example05();
    };

    function example06() {
        var last_name;

        last_name = 'Santos';
        console.log(last_name);
        example06();
    };

    function example07() {
        console.log(last_name); // ReferenceError: Cannot access 'last_name' before initialization
        let last_name = 'Santos';
        example07();
    };
})();