/*
    try {
        is executed when there was no error
    } 
    catch (error) {
        is executed when there was an error
    } 
    finally {
        will always be executed   
    }
*/


(() => {

    function example01() {

        try {
            console.log('Abrir arquivo.');
            console.log('Manipulei o arquivo e gerou erro.');
        }
        catch (error) {
            console.log('Tratando o erro.');
        }
        finally {
            console.log('IMPORTANTE - SEMPRE: Fechar arquivo.');
        }

        example01();
    };

})();


(() => {

    function example02() {

        const showTime = (date) => {

            if (date && !(date instanceof Date)) {
                throw new TypeError('Esperando instância de Date');
            };

            if (!date) {
                date = new Date();
            };

            return date.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
        };

        try {
            const date = new Date('01-01-1970 12:58:12');
            const hour = showTime(date);
            console.log(hour);
        }
        catch (error) {
            // console.log(error);
        }
        finally {
            console.log('Programa finalizado!');
        };

    };

    example02();

})();