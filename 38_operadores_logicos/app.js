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
    };
    example04();
};
startApp();