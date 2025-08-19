// URL se id nikalen
function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// API se detail laen
async function fetchCharacter(id) {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await response.json();
}


// Detail page pe show karein
async function renderCharacter() {
    const id = getQueryParam('id');
    if (!id) {
        document.getElementById('characterDetails').innerHTML = "Character ID nahi mila!";
        return;
    }
    const char = await fetchCharacter(id);
    document.getElementById('characterDetails').innerHTML = `
    <img src="${char.image}" alt="${char.name}" width="180" style="border-radius:50%">
    <h2>${char.name}</h2>
    <ul style="list-style:none; padding:0;">
      <li><strong>Status:</strong> ${char.status}</li>
      <li><strong>Species:</strong> ${char.species}</li>
      <li><strong>Type:</strong> ${char.type || 'Not Available'}</li>
      <li><strong>Gender:</strong> ${char.gender}</li>
      <li><strong>Origin:</strong> ${char.origin.name}</li>
      <li><strong>Location:</strong> ${char.location.name}</li>
      <li><strong>Episodes Appeared:</strong> ${char.episode.length}</li>
    </ul>
  `;
}

function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-GB') + ' ' +
        now.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('clock').textContent = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

renderCharacter();