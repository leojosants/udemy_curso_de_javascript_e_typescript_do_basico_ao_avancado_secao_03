(() => {
    function example01() {
        /*
            entre 00 e 11 = 'bom dia'
            entre 12 e 17 = 'bom tarde'
            entre 18 e 23 = 'bom noite'
        */
        function greeting(hours) {
            let message = '';

            if (hours <= 11) {
                message = '\nBom dia!';
            }
            else if (hours <= 17) {
                message = '\nBoa tarde!';
            }
            else if (hours <= 23) {
                message = '\nBoa noite!';
            }
            else {
                message = '\nHorário inválido!';
            };

            console.log(message);
        };

        const hours = Math.floor(Math.random() * 26);

        greeting(hours);
        example01();
    };

    function example02() {
        /*
            somente sairá de casa se não estiver chovendo e se tiver dinheiro
        */
        function check(sunny, have_money) {
            let message = '';

            if ((sunny === false) && (have_money === true)) {
                message = '\nCondição "favorável" para sair de casa!';
            }
            else {
                message = '\nCondição "não favorável" para sair de casa!';
            };

            console.log(message);
        };

        let sunny = (Math.floor(Math.random() * 2) === 0);
        let money = (Math.floor(Math.random() * 2) === 1);

        check(sunny, money);
    };
    example02();
})();