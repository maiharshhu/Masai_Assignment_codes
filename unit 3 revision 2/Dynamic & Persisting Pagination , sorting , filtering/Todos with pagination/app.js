let todosData = [];
const itemsPerPage = 10;

async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/todos";
    try {
        let result = await fetch(url);
        let data = await result.json();
        todosData = data;
        renderPage(1);
    }
    catch (error) {
        console.error(error);
    }
}

function renderPage(page) {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = todosData.slice(start, end);

    pageItems.forEach(todo => {
        const div = document.createElement('div');
        div.className = "dispData";

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        div.textContent = todo.title;
        div.appendChild(checkbox);
        const textNode = document.createTextNode("");
        div.appendChild(textNode);

        todoList.appendChild(div);

    });
}

function btnContainer() {
    const container = document.getElementById('button-container');
    container.innerHTML = '';
    for (let i = 1; i <= 20; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.addEventListener('click', () => renderPage(i));
        container.appendChild(btn);
    }
}

btnContainer();
fetchData();