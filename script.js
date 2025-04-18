const substances = [
    { name: "Chloral Hydrate", category: "Toxins" },
    { name: "Temazepam", category: "Prescription" },
    { name: "Zolpidem", category: "Prescription" },
    { name: "Chloroform", category: "Toxins" },
    { name: "Chlorpromazine", category: "Prescription" },
    { name: "Clonazepam", category: "Prescription" },
    { name: "Cocaine", category: "Drugs" },
    { name: "Codeine", category: "Prescription" },
    { name: "Cyclobenzaprine", category: "Prescription" },
    { name: "Diazepam", category: "Prescription" },
    { name: "Bromazepam", category: "Prescription" },
    { name: "Alprazolam", category: "Prescription" },
    { name: "Cannabinol", category: "Drugs" },
    { name: "Benzoylecgonine", category: "Drugs" },
    { name: "Buprenorphine", category: "Drugs" },
    { name: "Amphetamine", category: "Drugs" },
    { name: "BMK", category: "Precursors" },
    { name: "Caffeine", category: "Prescription" },
    { name: "Atropine", category: "Prescription" },
    { name: "Lorazepam", category: "Prescription" },
    { name: "Fentanyl", category: "Drugs" },
    { name: "Heroin", category: "Drugs" },
    { name: "Midazolam", category: "Prescription" },
    { name: "Tramadol", category: "Prescription" },
    { name: "Methadone", category: "Drugs" },
    { name: "Phenobarbital", category: "Prescription" },
    { name: "Creatinine", category: "Other" },
    { name: "Oxycodone", category: "Drugs" },
    { name: "Flunitrazepam", category: "Prescription" },
    { name: "Hydrocodone", category: "Drugs" },
    { name: "alprazolam", category: "Prescription" }
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
        card.onclick = () => {
            const fileName = sub.name.toLowerCase().replaceAll(" ", "_") + ".html";
            window.location.href = `substances/${fileName}`;
        };
        container.appendChild(card);
    });
}

// Initial render
renderCards(filteredSubstances);
