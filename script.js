let monuments = [
    { name: "Eiffel Tower", description: "An iconic iron tower.", city: "Paris", image: "images/eiffel.jpg" },
    { name: "Taj Mahal", description: "A beautiful white marble mausoleum.", city: "Agra", image: "images/taj.jpeg" },
    { name: "Statue of Liberty", description: "A colossal neoclassical sculpture.", city: "New York City", image: "images/liberty.jpg" },
    { name: "Colosseum", description: "A famous amphitheater.", city: "Rome", image: "images/colosseum.jpg" },
    { name: "Great Wall of China", description: "A historic wall in China.", city: "Beijing", image: "images/greatwall.jpg" },
    { name: "Machu Picchu", description: "An ancient Inca citadel.", city: "Cusco Region", image: "images/machu.jpg" },
    { name: "Petra", description: "Famous rock-cut architecture.", city: "Jordan", image: "images/petra.jpg" },
    { name: "Christ the Redeemer", description: "A large statue of Jesus Christ.", city: "Rio de Janeiro", image: "images/christ.jpg" },
    { name: "Pyramids of Giza", description: "Ancient Egyptian pyramids.", city: "Giza", image: "images/pyramids.jpg" }
];

function displayMonuments() {
    const grid = document.getElementById("monumentGrid");
    grid.innerHTML = "";
    monuments.forEach((monument, index) => {
        grid.innerHTML += `
            <div class="card">
                <img src="${monument.image}" onclick="editMonument(${index})">
                <h3>${monument.name}</h3>
                <p>${monument.description}</p>
                <p><strong>City:</strong> ${monument.city}</p>
                <button class="delete-btn" onclick="deleteMonument(${index})">Delete</button>
            </div>
        `;
    });
}

function openAddModal() {
    document.getElementById("monumentModal").style.display = "block";
    document.getElementById("modalTitle").innerText = "Add Monument";
}

function closeModal() {
    document.getElementById("monumentModal").style.display = "none";
}

function saveMonument() {
    const name = document.getElementById("monumentName").value;
    const description = document.getElementById("monumentDesc").value;
    const city = document.getElementById("monumentCity").value;
    const image = document.getElementById("monumentImage").value;

    if (name && description && city && image) {
        monuments.push({ name, description, city, image });
        displayMonuments();
        closeModal();
    } else {
        alert("Please fill in all fields.");
    }
}

function deleteMonument(index) {
    monuments.splice(index, 1);
    displayMonuments();
}

function filterMonuments() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = monuments.filter(mon => mon.name.toLowerCase().includes(searchValue));
    displayMonuments(filtered);
}

document.addEventListener("DOMContentLoaded", displayMonuments);
