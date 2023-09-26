(() => {
    function example01() {
        const date = new Date();
        console.log(date.toString());
        example01();
    };

    // looking for the time zone difference
    function example02() {
        // const trhee_hours = 60;
        // const trhee_hours = 60 * 60;
        const trhee_hours = 60 * 60 * 3 * 1000;
        console.log(`3 horas: ${trhee_hours} segundos`);

        const date = new Date(0 + trhee_hours);
        console.log(date.toString());
        example02();
    };

    // adding an extra day
    function example03() {
        const trhee_hours = 60 * 60 * 3 * 1000;
        const one_day = 60 * 60 * 24 * 1000;

        console.log(`3 horas: ${trhee_hours} segundos`);
        console.log(`24 horas: ${one_day} segundos`);

        const date = new Date();
        console.log(date.toString());

        const brazilian_time_zone = new Date(0 + trhee_hours + one_day);
        console.log(brazilian_time_zone.toString());
        example03();
    };

    function example04() {
        // const date = new Date(year, month(0 - 11), hours (0 - 24), minutes (0 a 59), second (0 - 59), milliseconds (0 - 999));
        const date = new Date(2023, 8, 12, 10, 20, 23, 1000);

        console.log(date.toString());
        example04();
    };

    function example05() {
        // const date = new Date(year, month(0 - 11), can be omitted, can be omitted, can be omitted, can be omitted);
        const date = new Date(2023, 4);

        console.log(date.toString());
        example05();
    };

    function example06() {
        // const date = new Date(year, month(0 - 11), can be omitted, can be omitted, can be omitted, can be omitted);
        const date = new Date(2023, 4);

        console.log(date.toString());
        example06();
    };

    // DateString
    function example07() {
        const date = new Date('2013-08-26 13:10:00');

        console.log(date.toString());
        example07();
    };

    function example08() {
        const full_date = new Date();
        console.log(full_date.toString());

        const day_of_week = full_date.getDay();
        console.log(day_of_week);

        const mounth = full_date.getMonth();
        console.log(mounth);

        const date = full_date.getDate();
        console.log(date);

        const year = full_date.getFullYear();
        console.log(year);

        const hours = full_date.getHours();
        console.log(hours);

        const minutes = full_date.getMinutes();
        console.log(minutes);

        const seconds = full_date.getSeconds();
        console.log(seconds);

        const millisecond = full_date.getMilliseconds();
        console.log(millisecond);
        example08();
    };

    // current date in milliseconds
    function example09() {
        const current_date_in_milliseconds = Date.now();
        console.log(current_date_in_milliseconds);

        const date = new Date(current_date_in_milliseconds);
        console.log(date);
        example09();
    };

    // format date
    function example10() {
        function addZeroLeft(number) {
            return number >= 10 ? number : `0${number}`;
        };

        function formatDate(date) {
            const curren_date = addZeroLeft(date.getDate());
            const minutes = addZeroLeft(date.getMinutes());
            const seconds = addZeroLeft(date.getSeconds());
            const year = addZeroLeft(date.getFullYear());
            const month = addZeroLeft(date.getMonth());
            const hours = addZeroLeft(date.getHours());

            return `${month}/${curren_date}/${year} - ${hours}:${minutes}:${seconds}`;
        };

        const date = new Date();

        const brazil_date = formatDate(date);
        console.log(brazil_date);
    };
    example10();

    /*
        month:  
            0  (january)     1  (february)
            2  (march)       3  (april)
            4  (may)         5  (june)
            6  (july)        7  (august)
            8  (september)   9  (october)
            10 (november)    11 (december)


        day of the week:
            0   (sunday)
            1   (monday)
            2   (tuesday)
            3   (wednesday)
            4   (thursday)
            5   (friday)
            6   (saturday)
    */
})();