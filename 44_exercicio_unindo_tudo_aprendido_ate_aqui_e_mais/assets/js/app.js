(() => {
    function myVersion() {
        /* */
        const elements = {
            data_height: document.querySelector('[data_height]'),
            data_weight: document.querySelector('[data_weight]'),
            data_submit: document.querySelector('[data_submit]'),
            data_result: document.querySelector('[data_result]'),
            data_form: document.querySelector('[data_form]'),
        };

        const registerData = [];

        /* */
        function receiveDataForm(event) {
            event.preventDefault();

            const weight = Number(elements.data_weight.value);
            const height = Number(elements.data_height.value);

            let imc = null;
            let status = null;

            function checkIMC(weight, height) {
                imc = weight / (height * height);

                if ((imc >= 0) && (imc < 18.5)) {
                    status = 'Abaixo do peso';
                }
                else if ((imc >= 18.5) && (imc <= 24.9)) {
                    status = 'Peso normal';
                }
                else if ((imc >= 25) && (imc <= 29.9)) {
                    status = 'Sobrepeso';
                }
                else if ((imc >= 30) && (imc <= 34.9)) {
                    status = 'Obesidade grau I';
                }
                else if ((imc >= 35) && (imc <= 39.9)) {
                    status = 'Obesidade grau II';
                }
                else if (imc >= 40) {
                    status = 'Obesidade grau III';
                }
                else {
                    status = 'Dados inválido!';
                };

                return imc.toFixed(2);
            };

            const result = checkIMC(weight, height);

            // registerData.push({
            //     weight,
            //     height,
            //     imc,
            // });

            elements.data_result.innerHTML = `
                <p>
                    <br />- Seu IMC é: ${result} -> (${status})
                </p>
            `;

            elements.data_weight.value = '';
            elements.data_height.value = '';
        };

        /* */
        elements.data_form.addEventListener('submit', receiveDataForm);
        myVersion();
    };

    function suggestedVersion() {
        /* */
        elements_html = {
            data_form: document.querySelector('[data_form]')
        };

        /* */
        function createParagraph() {
            const paragraph = document.createElement('p');
            return paragraph;
        };

        /* */
        function setResult(message, isValid) {
            const result = document.querySelector('[data_result');
            result.innerHTML = '';

            const paragraph = createParagraph();

            if (isValid) {
                paragraph.classList.add('result_paragraph');
            }
            else {
                paragraph.classList.add('bad');
            };

            paragraph.innerHTML = message

            result.appendChild(paragraph);
        };

        /* */
        function getIMC(value_weight, value_height) {
            const imc = value_weight / value_height * value_height;
            return imc.toFixed(2);
        };

        /* */
        function getStatusIMC(imc) {
            const degree = [
                'Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'
            ];

            if (imc >= 39.9) { return degree[5]; };

            if (imc >= 34.9) { return degree[4]; };

            if (imc >= 29.9) { return degree[3]; };

            if (imc >= 24.9) { return degree[2]; };

            if (imc >= 18.5) { return degree[1]; };

            if (imc < 18.5) { return degree[0]; };
        };

        /* */
        elements_html.data_form.addEventListener('submit', (event) => {
            event.preventDefault();

            const input_weight = event.target.querySelector('[data_weight]');
            const input_height = event.target.querySelector('[data_height]');

            const value_weight = Number(input_weight.value);
            const value_height = Number(input_height.value);

            if (!value_weight) {
                setResult('Peso inválido!', false);
                return;
            };

            if (!value_height) {
                setResult('Altura inválida!', false);
                return;
            };

            const imc = getIMC(value_weight, value_height);
            const statusIMC = getStatusIMC(imc);
            const message = `IMC: ${imc} - ${statusIMC}.`;

            setResult(message, true);
        });
    };

    suggestedVersion();
})();