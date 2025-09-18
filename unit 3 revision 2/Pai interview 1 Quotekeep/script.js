const quotesContainer = document.getElementById('quotes-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const tagButtons = document.querySelectorAll('.filter-btn');

let currentPage = 1;
let currentTag = "";

async function fetchQuotes(page) {
    const url = `http://api.quotable.io/quotes?page=${page}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        renderQuotes(data.results);
        updateButtons(data);
    } catch (error) {
        quotesContainer.innerHTML = '<p>Failed to load quotes. Please try again.</p>';
    }
}


function renderQuotes(quotes) {
    quotesContainer.innerHTML = '';
    quotes.forEach(quote => {
        const card = document.createElement('div');
        card.innerHTML = `
            <p>"${quote.content}"</p>
            <p><strong>- ${quote.author}</strong></p>
        `;
        quotesContainer.appendChild(card);
    });
}


function updateButtons(data) {
    prevBtn.disabled = data.page <= 1;
    nextBtn.disabled = data.page >= data.totalPages;
}


nextBtn.addEventListener('click', () => {
    currentPage++;
    fetchQuotes(currentPage);
});

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchQuotes(currentPage);
    }
});

tagButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentTag = button.dataset.tag;
        currentPage = 1;
        fetchQuotes(currentPage, currentTag)
    })
    tagButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
})
fetchQuotes(currentPage);