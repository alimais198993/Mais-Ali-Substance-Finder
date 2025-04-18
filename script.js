
const substances = [
    { name: "Amphetamine", category: "Stimulants", color: "#ffcccb" }
    { name: "Methamphetamine", category: "Stimulants", color: "#ffcccb" }
    { name: "MDMA", category: "Stimulants", color: "#ffcccb" }
    { name: "MDA", category: "Stimulants", color: "#ffcccb" }
    { name: "MDEA", category: "Stimulants", color: "#ffcccb" }
    { name: "Ephedrine", category: "Stimulants", color: "#ffcccb" }
    { name: "Pseudoephedrine", category: "Stimulants", color: "#ffcccb" }
    { name: "Fenetylline", category: "Stimulants", color: "#ffcccb" }
    { name: "Cathinone", category: "Stimulants", color: "#ffcccb" }
    { name: "Methcathinone", category: "Stimulants", color: "#ffcccb" }
    { name: "Morphine", category: "Opioids", color: "#cce5ff" }
    { name: "Codeine", category: "Opioids", color: "#cce5ff" }
    { name: "Thebaine", category: "Opioids", color: "#cce5ff" }
    { name: "Oxycodone", category: "Opioids", color: "#cce5ff" }
    { name: "Hydrocodone", category: "Opioids", color: "#cce5ff" }
    { name: "Fentanyl", category: "Opioids", color: "#cce5ff" }
    { name: "Carfentanil", category: "Opioids", color: "#cce5ff" }
    { name: "Ketobemidone", category: "Opioids", color: "#cce5ff" }
    { name: "Tramadol", category: "Opioids", color: "#cce5ff" }
    { name: "Heroin", category: "Opioids", color: "#cce5ff" }
    { name: "Diazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Oxazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Lorazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Clonazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Alprazolam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Nitrazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Temazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Flurazepam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Midazolam", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Chlordiazepoxide", category: "Benzodiazepines", color: "#e6ccff" }
    { name: "Cannabis", category: "Cannabinoids", color: "#b6d7a8" }
    { name: "Zopiclone", category: "Hypnotics", color: "#f0e0f8" }
    { name: "Zolpidem", category: "Hypnotics", color: "#f0e0f8" }
    { name: "Zaleplon", category: "Hypnotics", color: "#f0e0f8" }
    { name: "Eszopiclone", category: "Hypnotics", color: "#f0e0f8" }
    { name: "Barbital", category: "Barbiturates", color: "#fff0b3" }
    { name: "Phenobarbital", category: "Barbiturates", color: "#fff0b3" }
    { name: "LSD", category: "Hallucinogens", color: "#ffe0f0" }
    { name: "Mescaline", category: "Hallucinogens", color: "#ffe0f0" }
    { name: "Psilocin", category: "Hallucinogens", color: "#ffe0f0" }
    { name: "Psilocybin", category: "Hallucinogens", color: "#ffe0f0" }
    { name: "Bufotenine", category: "Hallucinogens", color: "#ffe0f0" }
    { name: "SalvinorinA", category: "Hallucinogens", color: "#ffe0f0" }
    { name: "Ketamine", category: "Dissociatives", color: "#d5f4e6" }
    { name: "Scopolamine", category: "Toxins", color: "#f9e79f" }
    { name: "Atropine", category: "Toxins", color: "#f9e79f" }
    { name: "Ricin", category: "Toxins", color: "#f9e79f" }
    { name: "Thallium", category: "Heavy Metals", color: "#d6d6d6" }
    { name: "Arsenic", category: "Heavy Metals", color: "#d6d6d6" }
    { name: "CarbonMonoxide", category: "Gases", color: "#f2f2f2" }
    { name: "P2NP", category: "Precursors", color: "#f0e68c" }
    { name: "GHB", category: "Depressants", color: "#f4cccc" }
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
