function start() {
   
    const version01 = () => {
        const html_elements = {
            timer_display: document.querySelector('[data_timer_display]'),
            start_button: document.querySelector('[data_start_button]'),
            pause_button: document.querySelector('[data_pause_button]'),
            reset_button: document.querySelector('[data_reset_button]'),
        };

        let seconds = 0;
        let timer;


        /******************** functions *********************/

        const getTimeFromSeconds = (seconds) => {
            const date = new Date(seconds * 1000);
            return date.toLocaleTimeString('pt-BR',
                {
                    hour12: false,
                    timeZone: 'GMT',
                });
        };

        const startClock = () => {
            timer = setInterval(() => {
                seconds++;
                html_elements.timer_display.innerHTML = getTimeFromSeconds(seconds);
            }, 1000);
        };


        /******************** events *********************/

        html_elements.start_button.addEventListener('click', () => {
            html_elements.timer_display.classList.remove('pause_display');
            html_elements.timer_display.classList.remove('reset_display');

            html_elements.pause_button.classList.remove('pause_button');
            html_elements.reset_button.classList.remove('reset_button');

            html_elements.timer_display.classList.add('start_display');
            html_elements.start_button.classList.add('start_button');

            clearInterval(timer);
            startClock();
        });

        html_elements.pause_button.addEventListener('click', () => {
            html_elements.timer_display.classList.remove('start_display');
            html_elements.timer_display.classList.remove('reset_display');

            html_elements.start_button.classList.remove('start_button');
            html_elements.reset_button.classList.remove('reset_button');

            html_elements.timer_display.classList.add('pause_display');
            html_elements.pause_button.classList.add('pause_button');


            clearInterval(timer);
        });

        html_elements.reset_button.addEventListener('click', () => {
            clearInterval(timer);
            html_elements.timer_display.innerHTML = '00:00:00';
            html_elements.timer_display.classList.remove('start_display');
            html_elements.timer_display.classList.remove('pause_display');

            html_elements.start_button.classList.remove('start_button');
            html_elements.pause_button.classList.remove('pause_button');

            html_elements.timer_display.classList.add('reset_display');
            html_elements.reset_button.classList.add('reset_button');
            seconds = 0;
        });

        version01();
    };

    const version02 = () => {
        const html_elements = {
            timer_display: document.querySelector('[data_timer_display]'),
            buttons: document.querySelectorAll('[data_button]'),
        };

        let seconds = 0;
        let timer;


        /******************** functions *********************/

        const getTimeFromSeconds = (seconds) => {
            const date = new Date(seconds * 1000);
            return date.toLocaleTimeString('pt-BR',
                {
                    hour12: false,
                    timeZone: 'GMT',
                }
            );
        };

        const startClock = () => {
            timer = setInterval(() => {
                seconds++;
                html_elements.timer_display.innerHTML = getTimeFromSeconds(seconds);
            }, 1000);
        };


        /******************** events *********************/

        document.addEventListener('click', (event) => {
            const element = event.target.getAttribute('data_button');

            html_elements.buttons.forEach((button) => {
                if (element === 'start') {
                    if (button.getAttribute('data_button') === 'start') {
                        button.classList.add('start_button');
                        html_elements.timer_display.classList.add('start_display');
                        clearInterval(timer);
                        startClock();
                    }
                    else {
                        button.classList.remove('pause_button');
                        button.classList.remove('reset_button');
                        html_elements.timer_display.classList.remove('pause_display');
                        html_elements.timer_display.classList.remove('reset_display');
                    };
                };

                if (element === 'pause') {
                    if (button.getAttribute('data_button') === 'pause') {
                        if (seconds !== 0) {
                            html_elements.timer_display.classList.add('pause_display');
                            button.classList.add('pause_button');
                            clearInterval(timer);
                        };
                    }
                    else {
                        button.classList.remove('start_button');
                        button.classList.remove('pause_button');
                    };
                };

                if (element === 'reset') {
                    if (button.getAttribute('data_button') === 'reset') {
                        html_elements.timer_display.classList.remove('pause_display');
                        html_elements.timer_display.classList.remove('start_display');
                        html_elements.timer_display.innerHTML = '00:00:00';
                        button.classList.add('reset_button');
                        seconds = 0;
                        clearInterval(timer);
                    }
                    else {
                        button.classList.remove('start_button');
                        button.classList.remove('pause_button');
                    };
                };
            });

        });
    };
    version02();
};
start();