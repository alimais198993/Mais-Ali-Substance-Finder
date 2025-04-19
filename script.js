
let currentPage = 1;
const itemsPerPage = 20;

const substances = [
   { name: "Ketobemidone", category: "Opioids", color: "#cce5ff" },
{ name: "Carfentanil", category: "Opioids", color: "#cce5ff" },
{ name: "Scopolamine", category: "Toxins", color: "#f9e79f" },
{ name: "GHB", category: "Depressants", color: "#f4cccc" },
{ name: "Barbital", category: "Barbiturates", color: "#fff0b3" },
{ name: "Methcathinone", category: "Stimulants", color: "#ffcccb" },
{ name: "Zopiclone", category: "Hypnotics", color: "#f0e0f8" },
{ name: "Thallium", category: "Heavy Metals", color: "#d6d6d6" },
{ name: "Ricin", category: "Toxins", color: "#f9e79f" },
{ name: "P2NP", category: "Precursors", color: "#f0e68c" },
{ name: "Phenazepam", category: "Benzodiazepines", color: "#e6ccff" },
{ name: "Etizolam", category: "Benzodiazepines", color: "#e6ccff" },
{ name: "Clobazam", category: "Benzodiazepines", color: "#e6ccff" },
{ name: "Flunitrazepam", category: "Benzodiazepines", color: "#e6ccff" },
{ name: "Estazolam", category: "Benzodiazepines", color: "#e6ccff" },
{ name: "Lormetazepam", category: "Benzodiazepines", color: "#e6ccff" },
{ name: "Cyclobenzaprine", category: "Muscle Relaxants", color: "#e8f6f3" },
{ name: "ChloralHydrate", category: "Hypnotics", color: "#f0e0f8" },
{ name: "Diphenhydramine", category: "Antihistamines", color: "#fddde6" },
{ name: "Promethazine", category: "Antihistamines", color: "#fddde6" },
{ name: "Hydroxyzine", category: "Antihistamines", color: "#fddde6" },
{ name: "Meclizine", category: "Antihistamines", color: "#fddde6" },
{ name: "Prochlorperazine", category: "Neuroleptics", color: "#d4e1fa" },
{ name: "SodiumNitrite", category: "Toxins", color: "#f9e79f" },
{ name: "SodiumAzide", category: "Toxins", color: "#f9e79f" },
{ name: "Mercury", category: "Heavy Metals", color: "#d6d6d6" },
{ name: "Lead", category: "Heavy Metals", color: "#d6d6d6" },
{ name: "Cadmium", category: "Heavy Metals", color: "#d6d6d6" },
{ name: "Barium", category: "Heavy Metals", color: "#d6d6d6" },
{ name: "Benzene", category: "Industrial Chemicals", color: "#f4f4f4" },
{ name: "Toluene", category: "Industrial Chemicals", color: "#f4f4f4" },
{ name: "Xylene", category: "Industrial Chemicals", color: "#f4f4f4" },
{ name: "Acetone", category: "Industrial Chemicals", color: "#f4f4f4" },
{ name: "Ethanol", category: "Toxic Alcohols", color: "#f7c6c7" },
{ name: "Methanol", category: "Toxic Alcohols", color: "#f7c6c7" },
{ name: "Isopropanol", category: "Toxic Alcohols", color: "#f7c6c7" },
{ name: "EthyleneGlycol", category: "Toxic Alcohols", color: "#f7c6c7" },
{ name: "Formaldehyde", category: "Industrial Chemicals", color: "#f4f4f4" },
{ name: "Ammonia", category: "Industrial Chemicals", color: "#f4f4f4" }
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
        card.className = `card ${sub.category}`;
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

// Initial render
renderCards(filteredSubstances);
