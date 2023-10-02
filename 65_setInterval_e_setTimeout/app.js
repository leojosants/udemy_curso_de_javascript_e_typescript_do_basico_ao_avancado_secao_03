// example 01
(() => {

    function start() {
        const getTimeNow = () => {
            let date = new Date();
            return date.toLocaleTimeString('pt-BR', { hour12: false });
        };

        const showTimeNow = () => {
            console.log(getTimeNow());
        };

        setInterval((showTimeNow), 1000);

        start();
    };

})();


// example 02
(() => {

    function start() {
        const getTimeNow = () => {
            let date = new Date();
            return date.toLocaleTimeString('pt-BR', { hour12: false });
        };

        setInterval(() => {
            console.log(getTimeNow());
        }, 1000);

        start();
    };

})();


// example 03
(() => {

    function start() {
        const getTimeNow = () => {
            let date = new Date();
            return date.toLocaleTimeString('pt-BR', { hour12: false });
        };

        setTimeout(() => {
            console.log('Iniciando a exibição!');
        }, 1000);

        setTimeout(() => {
        }, 1000);

        const timer = setInterval(() => {
            console.log(getTimeNow());
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
        }, 5000);

        setTimeout(() => {
            console.log('Terminando exibição');
        }, 6000);

    };

    start();

})();