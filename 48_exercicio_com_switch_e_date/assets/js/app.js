(() => {
    function versionOne() {
        const h1 = document.querySelector('[data_container] h1');
        const date = new Date();

        function getDayWeekString(day_week) {

            let day_week_string = null;

            switch (day_week) {
                case 0:
                    day_week_string = 'Domingo';
                    return day_week_string;

                case 1:
                    day_week_string = 'Segunda-feira';
                    return day_week_string;

                case 2:
                    day_week_string = 'Terça-feira';
                    return day_week_string;

                case 3:
                    day_week_string = 'Quarta-feira';
                    return day_week_string;

                case 4:
                    day_week_string = 'Quinta-feira';
                    return day_week_string;

                case 5:
                    day_week_string = 'Sexta-feira';
                    return day_week_string;

                case 6:
                    day_week_string = 'Sábado';
                    return day_week_string;

                default:
                    break;
            };
        };

        function getMonthNameString(number_month) {
            let month_name = null;

            switch (number_month) {
                case 0:
                    month_name = 'Janeiro';
                    return month_name;

                case 1:
                    month_name = 'Fevereiro';
                    return month_name;

                case 2:
                    month_name = 'Março';
                    return month_name;

                case 3:
                    month_name = 'Abril';
                    return month_name;

                case 4:
                    month_name = 'Maio';
                    return month_name;

                case 5:
                    month_name = 'Junho';
                    return month_name;

                case 7:
                    month_name = 'Julho';
                    return month_name;

                case 8:
                    month_name = 'Agosto';
                    return month_name;

                case 9:
                    month_name = 'Setembro';
                    return month_name;

                case 10:
                    month_name = 'Outubro';
                    return month_name;

                case 11:
                    month_name = 'Novembro';
                    return month_name;

                case 12:
                    month_name = 'Dezembro';
                    return month_name;

                default:
                    break;
            };
        };

        function createDate(date) {
            const day_week = date.getDay();
            const month_number = date.getMonth();
            const day_name = getDayWeekString(day_week);
            const month_name = getMonthNameString(month_number);

            return (
                `${day_name}, ` +
                `${date.getDay()} de ` +
                `${month_name} de ` +
                `${date.getFullYear()} ` +
                `${zeroLeft(date.getHours())}:` +
                `${zeroLeft(date.getMinutes())} `
            );
        };

        function zeroLeft(number) {
            return number >= 10 ? number : `0${number} `
        };

        h1.innerHTML = createDate(date);
        versionOne();
    };

    function versionTwo() {
        const h1 = document.querySelector('[data_container] h1');
        const date = new Date();

        options = {
            dateStyle: 'full',
            timeStyle: 'short',
        };

        h1.innerHTML = date.toLocaleString('pt-BR', options);
        versionTwo();
    };

    function versionThree() {
        const h1 = document.querySelector('[data_container] h1');
        const date = new Date();

        function getDayWeekString(day_week) {
            const days_week_string = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

            return days_week_string[day_week];
        };

        function getMonthNameString(number_month) {
            const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

            return months[number_month];
        };

        function createDate(date) {
            const day_week = date.getDay();
            const month_number = date.getMonth();
            const day_name = getDayWeekString(day_week);
            const month_name = getMonthNameString(month_number);

            return (
                `${day_name}, ` +
                `${date.getDay()} de ` +
                `${month_name} de ` +
                `${date.getFullYear()} ` +
                `${zeroLeft(date.getHours())}:` +
                `${zeroLeft(date.getMinutes())} `
            );
        };

        function zeroLeft(number) {
            return number >= 10 ? number : `0${number} `
        };

        h1.innerHTML = createDate(date);
        versionThree();
    };
})();
