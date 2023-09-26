(() => {
    function example01() {
        const user_score = Math.floor(Math.random() * 1001);
        let message = null;

        if (user_score >= 1000) {
            message = 'Usuário VIP';
        }
        else {
            message = 'Usuário NORMAL';
        };

        console.log(message);
        example01();
    };

    function example02() {
        const user_score = Math.floor(Math.random() * 1001);
        let message = null;

        user_score >= 1000 ? message = 'Usuário VIP' : message = 'Usuário NORMAL';

        console.log(message);
        example02();
    };

    function example03() {
        function generateScors() {
            return Math.floor(Math.random() * 5000);
        };

        function checkUserScors(user_score = 0) {
            let message = null;
            user_score >= 1000 ? message = 'Usuário VIP' : message = 'Usuário NORMAL';
            console.log(message);
        };

        const user_score = generateScors();

        checkUserScors(user_score);
        checkUserScors();
        example03();
    };

    function example04() {
        const user_color = null;
        const default_color = user_color || 'Preta';

        console.log(default_color);
    };
    example04();
})();