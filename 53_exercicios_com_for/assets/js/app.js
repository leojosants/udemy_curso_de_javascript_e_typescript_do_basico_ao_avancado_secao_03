(() => {
    function version01() {
        const data_container = document.querySelector('[data_container]');

        const elements = [
            { tag: 'p', text: 'Lorem 1' },
            { tag: 'div', text: 'Lorem 1' },
            { tag: 'footer', text: 'Lorem 1' },
            { tag: 'section', text: 'Lorem 1' },
        ];

        const section_content = document.createElement('section');

        function createElement(tag) {
            return document.createElement(tag);
        };

        const paragraph = createElement(elements[0].tag);
        paragraph.innerHTML = elements[0].text;

        const div = createElement(elements[1].tag);
        div.innerHTML = elements[1].text;

        const footer = createElement(elements[2].tag);
        footer.innerHTML = elements[2].text;

        const section = createElement(elements[3].tag);
        section.innerHTML = elements[3].text;

        section_content.appendChild(section);
        section_content.appendChild(div);
        section_content.appendChild(paragraph);
        section_content.appendChild(footer);

        data_container.appendChild(section_content);
        version01();
    };

    function version02() {
        const elements = [
            { tag: 'p', text: 'Conteúdo do "parágrafo"' },
            { tag: 'div', text: 'Conteúdo da "div"' },
            { tag: 'footer', text: 'Conteúdo do "footer"' },
            { tag: 'section', text: 'Conteúdo da "section"' },
        ];

        const data_container = document.querySelector('[data_container]');
        const div_content = document.createElement('div');

        for (let i = 0; i < elements.length; i++) {
            let { tag, text } = elements[i];
            let element = document.createElement(tag);
            let create_text_node = document.createTextNode(text);   // element.innerText = text;
            element.appendChild(create_text_node);
            div_content.appendChild(element);
        };

        data_container.appendChild(div_content);
        console.log(data_container)
    };
    version02();
})();