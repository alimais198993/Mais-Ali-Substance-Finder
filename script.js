
let currentPage = 1;
const itemsPerPage = 20;

const substances = [
    { name: "Amphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "Methamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "MDA", category: "Stimulants", color: "#ffcccb" },
    { name: "MDMA", category: "Stimulants", color: "#ffcccb" },
    { name: "MDEA", category: "Stimulants", color: "#ffcccb" },
    { name: "Pseudoephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "Ephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "Pseudoephedrine", category: "Stimulants", color: "#ffcccb" }
];

let currentLang = "en";
let filteredSubstances = [...substances];

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.getElementById("langBtn").innerText = currentLang === "en" ? "العربية" : "English";
    document.getElementById("title").innerText = currentLang === "en" ? "LCMS Substance Finder" : "باحث المواد التحليلية";
    document.getElementById("searchBox").placeholder = currentLang === "en" ? "Search for a substance..." : "ابحث عن مادة...";
    renderCards(filteredSubstances);
}

function filterCategory(category) {
    filteredSubstances = category === "All" ? [...substances] : substances.filter(s => s.category === category);
    currentPage = 1;
    renderCards(filteredSubstances);
}

function searchSubstances() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const results = substances.filter(s => s.name.toLowerCase().includes(query));
    currentPage = 1;
    renderCards(results);
}

function renderCards(list) {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedList = list.slice(start, end);

    paginatedList.forEach(sub => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerText = sub.name;
        card.style.backgroundColor = sub.color;
        card.onclick = () => window.location.href = `substances/${sub.name.toLowerCase()}.html`;
        container.appendChild(card);
    });

    renderPagination(list.length);
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById("paginationContainer");
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        if (i === currentPage) btn.classList.add("active");
        btn.onclick = () => goToPage(i);
        paginationContainer.appendChild(btn);
    }
}

function goToPage(page) {
    currentPage = page;
    renderCards(filteredSubstances);
}

function filterByLetter(letter) {
    const results = letter === "All"
        ? substances
        : substances.filter(s => s.name.toLowerCase().startsWith(letter.toLowerCase()));
    currentPage = 1;
    renderCards(results);
}

renderCards(filteredSubstances);
