(() => {

    function example01() {
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

        const date = new Date();
        const day_week = date.getDay();
        const day_week_string = getDayWeekString(day_week);

        console.log(`${day_week}: ${day_week_string}`);
    };
    example01();
})();