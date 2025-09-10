let usersData = [];
const itemsPerPage = 6;
let currentPage = 1;

async function fetchData() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
        let res = await fetch(url);
        let data = await res.json();
        usersData = data;
        renderUserPage(currentPage);
    } catch (error) {
        console.error(error);
    }
}

function renderUserPage(page) {
    const display = document.getElementById('displayData');
    display.innerHTML = "";

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageUsers = usersData.slice(start, end);

    pageUsers.forEach(user => {
        const div = document.createElement('div');
        div.textContent = `${user.name} (${user.email})`;
        display.appendChild(div);
    });

    // Disable prev button on first page
    document.getElementById('prevBtn').disabled = page === 1;
    // Disable next button on last page
    document.getElementById('nextBtn').disabled = end >= usersData.length;
};

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderUserPage(currentPage);
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if ((currentPage * itemsPerPage) < usersData.length) {
        currentPage++;
        renderUserPage(currentPage);
    }
});

fetchData();
