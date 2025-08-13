const form = document.getElementById('snippet-form');
const snippetsContainer = document.getElementById('snippets-container');

let snippets = JSON.parse(localStorage.getItem('snippets')) || [];

snippets.forEach(snippet => renderSnippet(snippet));

function renderSnippet(snippet) {
    const card = document.createElement('div');
    card.classList.add('snippet-card');

    const titleEl = document.createElement('header');
    titleEl.textContent = snippet.title;

    const langEl = document.createElement('p');
    langEl.textContent = `Language: ${snippet.language}`;

    const codeEl = document.createElement('pre');
    codeEl.textContent = snippet.code;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        snippets = snippets.filter(s => !(s.title === snippet.title && s.code === snippet.code));
        localStorage.setItem('snippets', JSON.stringify(snippets));
        snippetsContainer.removeChild(card);
    });

    card.appendChild(titleEl);
    card.appendChild(langEl);
    card.appendChild(codeEl);
    card.appendChild(deleteBtn);

    snippetsContainer.appendChild(card);
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const language = document.getElementById('language').value.trim();
    const code = document.getElementById('code').value.trim();

    if (!title || !language || !code) return;

    const newSnippet = { title, language, code };

    snippets.push(newSnippet);
    localStorage.setItem('snippets', JSON.stringify(snippets));

    renderSnippet(newSnippet);

    form.reset();
});
