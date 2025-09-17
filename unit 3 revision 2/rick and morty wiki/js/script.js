function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB') + ' ' +
        now.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('clock').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();


let currentPage = 1;
let totalPages = 1;

async function getCharacters(page = 1) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await response.json();
    totalPages = data.info.pages;
    return data.results;
}

async function showCharacters(page = 1) {
    const characters = await getCharacters(page);
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    characters.slice(0, 6).forEach(character => {
        gallery.innerHTML += `
    <div class="card">
      <a href="character.html?id=${character.id}" target="_blank" style="text-decoration:none; color:inherit;">
        <img src="${character.image}" alt="${character.name}" width="120" height="120" style="border-radius:50%;">
        <h3>${character.name}</h3>
        <p>Species: ${character.species}</p>
        <p>Status: ${character.status}</p>
      </a>
    </div>
  `;
    });
    document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;
}

document.getElementById('randomBtn').onclick = async function () {
    // Pehle API se total character count laao
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    const count = data.info.count;
    // Random id 1 se count ke beech nikaalo
    const randomId = Math.floor(Math.random() * count) + 1;
    // New tab me character.html kholo, id ke saath
    window.open(`character.html?id=${randomId}`, "_blank");
};

// Button ke events:
document.getElementById('nextBtn').onclick = function () {
    if (currentPage < totalPages) {
        currentPage++;
        showCharacters(currentPage);
    }
};
document.getElementById('prevBtn').onclick = function () {
    if (currentPage > 1) {
        currentPage--;
        showCharacters(currentPage);
    }
};

document.getElementById('themeBtn').onclick = function () {
    document.body.classList.toggle('dark');
    // Local storage mein yaad bhi rakh sakte ho
};


// Start me gallery dikhao
showCharacters(currentPage);
