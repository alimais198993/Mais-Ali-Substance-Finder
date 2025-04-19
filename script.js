let currentPage = 1;
const itemsPerPage = 20;

const substances = [
    { name: "Amphetamine", category: "Drugs", color: "#f1948a" },
    { name: "Methamphetamine", category: "Drugs", color: "#f1948a" },
    { name: "MDMA", category: "Drugs", color: "#f1948a" },
    { name: "MDA", category: "Drugs", color: "#f1948a" },
    { name: "MDEA", category: "Drugs", color: "#f1948a" },
    { name: "Ephedrine", category: "Drugs", color: "#f1948a" },
    { name: "Pseudoephedrine", category: "Drugs", color: "#f1948a" },
    { name: "Cathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "Methcathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "Bupropion", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Methylphenidate", category: "Stimulants", color: "#ffcccb" },
    { name: "Modafinil", category: "Stimulants", color: "#ffcccb" },
    { name: "Morphine", category: "Opioids", color: "#cce5ff" },
    { name: "Codeine", category: "Opioids", color: "#cce5ff" },
    { name: "Heroin", category: "Opioids", color: "#cce5ff" },
    { name: "Oxycodone", category: "Opioids", color: "#cce5ff" },
    { name: "Fentanyl", category: "Opioids", color: "#cce5ff" },
    { name: "Oxymorphone", category: "Opioids", color: "#cce5ff" },
    { name: "Fenetylline", category: "Drugs", color: "#f1948a" }
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
    if (category === "All") {
        filteredSubstances = [...substances];
    } else {
        filteredSubstances = substances.filter(s => s.category === category);
    }
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
        card.className = `card`;
        card.style.backgroundColor = sub.color;
        card.innerText = sub.name;
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
    if (letter === "All") {
        currentPage = 1;
        renderCards(substances);
        return;
    }
    const results = substances.filter(s =>
        s.name.toLowerCase().startsWith(letter.toLowerCase())
    );
    currentPage = 1;
    renderCards(results);
}

renderCards(filteredSubstances);
