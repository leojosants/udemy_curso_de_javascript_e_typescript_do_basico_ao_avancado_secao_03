function start() {
    const html_elements = {
        task_button: document.querySelector('[data_add_task_button]'),
        task_input: document.querySelector('[data_new_task_input]'),
        tasks: document.querySelector('[data_tasks]'),
    };

    const createElement = (element) => {
        const html_element = document.createElement(element);
        return html_element;
    };

    const createButton = (li) => {
        li.innerText += ' ';
        const remove_button = createElement('button');
        remove_button.setAttribute('data_remove_button', '');
        remove_button.innerText = 'Apagar';
        li.appendChild(remove_button);
    };

    const createTask = (input_text) => {
        const element_li = createElement('li');
        element_li.innerHTML = input_text;
        html_elements.tasks.appendChild(element_li);
        clearInput();
        focusInput();
        createButton(element_li);
        saveTasks();
    };

    const clearInput = () => {
        html_elements.task_input.value = '';
    };

    const focusInput = () => {
        html_elements.task_input.focus();
    };

    const saveTasks = () => {
        const taks_li = html_elements.tasks.querySelectorAll('li');
        const tasks_list = [];

        for (const task of taks_li) {
            let text_task = task.innerText;
            text_task = text_task.replace('Apagar', '').trim();
            tasks_list.push(text_task);
        };

        const tasks_json = JSON.stringify(tasks_list);
        localStorage.setItem('tasks', tasks_json);
    };

    const addSavedTasks = () => { 
        const tasks = localStorage.getItem('tasks');
        const tasks_list = JSON.parse(tasks);
      
        for (const task of tasks_list) {
            createTask(task);
        };
    };

    addSavedTasks();

    /************************ events *************************/

    html_elements.task_button.addEventListener('click', () => {
        if (!html_elements.task_input.value) {
            alert('Não é possível adicionar uma tarefa vazia!');
            return;
        }

        createTask(html_elements.task_input.value);
    });

    html_elements.task_input.addEventListener('keypress', (event) => {
        if (event.keyCode === 13) {
            if (!html_elements.task_input.value) {
                alert('Não é possível adicionar uma tarefa vazia!');
                return;
            }

            createTask(html_elements.task_input.value);
        };
    });

    document.addEventListener('click', (event) => {
        const element_target = event.target;
        const parentNode = element_target.parentNode;

        if (element_target.getAttribute('data_remove_button') === '') {
            parentNode.remove();
            saveTasks();
        };
    });
};
start();