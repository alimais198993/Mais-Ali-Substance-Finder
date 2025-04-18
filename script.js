
const substances = [
    { name: "Amphetamine", category: "Drugs" },
    { name: "Methamphetamine", category: "Drugs" },
    { name: "MDA", category: "Drugs" },
    { name: "MDMA", category: "Drugs" },
    { name: "Ephedrine", category: "Precursors" },
    { name: "Pseudoephedrine", category: "Precursors" },
    { name: "BMK", category: "Precursors" },
    { name: "PMK", category: "Precursors" },
    { name: "Fenetylline", category: "Drugs" },
    { name: "Methcathinone", category: "Drugs" },
    { name: "Bupropion", category: "Prescription" },
    { name: "Trazodone", category: "Prescription" },
    { name: "Sertraline", category: "Prescription" },
    { name: "Clonazepam", category: "Prescription" },
    { name: "Diazepam", category: "Prescription" },
    { name: "Alprazolam", category: "Prescription" },
    { name: "Flunitrazepam", category: "Prescription" },
    { name: "Lorazepam", category: "Prescription" },
    { name: "Midazolam", category: "Prescription" },
    { name: "Temazepam", category: "Prescription" },
    { name: "Creatinine", category: "Other" }
];

let currentLang = "en";

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.getElementById("langBtn").innerText = currentLang === "en" ? "العربية" : "English";
    document.getElementById("title").innerText = currentLang === "en" ? "LCMS Substance Finder" : "باحث المواد التحليلية";
    document.getElementById("searchBox").placeholder = currentLang === "en" ? "Search for a substance..." : "ابحث عن مادة...";
    renderCards(filteredSubstances);
}

let filteredSubstances = [...substances];

function filterCategory(category) {
    if (category === "All") {
        filteredSubstances = [...substances];
    } else {
        filteredSubstances = substances.filter(s => s.category === category);
    }
    renderCards(filteredSubstances);
}

function searchSubstances() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const results = substances.filter(s => s.name.toLowerCase().includes(query));
    renderCards(results);
}

function renderCards(list) {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    list.forEach(sub => {
        const card = document.createElement("div");
        card.className = `card ${sub.category}`;
        card.innerText = sub.name;
        card.onclick = () => window.location.href = `substances/${sub.name.toLowerCase()}.html`;
        container.appendChild(card);
    });
}

// Initial render
renderCards(filteredSubstances);
