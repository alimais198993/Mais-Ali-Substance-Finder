
let currentPage = 1;
const itemsPerPage = 20;

const substances = [
    { name: "4-hydroxyamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "4-mta", category: "Other", color: "#d1d1e0" },
    { name: "perphenazine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "trifluoperazine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "fluphenazine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "thioridazine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "chlorpromazine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "oxazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "duloxetine", category: "Antidepressants", color: "#ffe0b3" },
    { name: "aripiprazole", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "paliperidone", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "mirtazapine", category: "Antidepressants", color: "#ffe0b3" },
    { name: "lurasidone", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "clonazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "sertraline", category: "Antidepressants", color: "#ffe0b3" },
    { name: "venlafaxine", category: "Antidepressants", color: "#ffe0b3" },
    { name: "tapentadol", category: "Opioids", color: "#cce5ff" },
    { name: "ziprasidone", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "temazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "aceticanhydride", category: "Precursors", color: "#f0e68c" },
    { name: "eszopiclone", category: "Hypnotics", color: "#f0e0f8" },
    { name: "diazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "zopiclone", category: "Hypnotics", color: "#f0e0f8" },
    { name: "zolpidem", category: "Hypnotics", color: "#f0e0f8" },
    { name: "risperidone", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "lorazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "olanzapine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "quetiapine", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "tramadol", category: "Opioids", color: "#cce5ff" },
    { name: "amitriptyline", category: "Antidepressants", color: "#ffe0b3" },
    { name: "fluoxetine", category: "Antidepressants", color: "#ffe0b3" },
    { name: "haloperidol", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "alpha-pvp", category: "Stimulants", color: "#ffcccb" },
    { name: "naphyrone", category: "Stimulants", color: "#ffcccb" },
    { name: "eutylone", category: "Stimulants", color: "#ffcccb" },
    { name: "citalopram", category: "Antidepressants", color: "#ffe0b3" },
    { name: "sertraline", category: "Antidepressants", color: "#ffe0b3" },
    { name: "4-cec", category: "Stimulants", color: "#ffcccb" },
    { name: "alprazolam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "n-ethylpentylone", category: "Stimulants", color: "#ffcccb" },
    { name: "amobarbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "amphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "apaan", category: "Uncategorized", color: "#d9d9d9" },
    { name: "barbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "benzoic-acid-derivatives", category: "Metabolites", color: "#ffd1dc" },
    { name: "bmk", category: "Precursors", color: "#f0e68c" },
    { name: "buphedrone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "buprenorphine", category: "Opioids", color: "#cce5ff" },
    { name: "bupropion", category: "Uncategorized", color: "#d9d9d9" },
    { name: "butalbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "butylone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "cathine", category: "Uncategorized", color: "#d9d9d9" },
    { name: "cathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "cathinone-glucuronide", category: "Stimulants", color: "#ffcccb" },
    { name: "cathinone-sulfate", category: "Stimulants", color: "#ffcccb" },
    { name: "clonazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "codeine", category: "Opioids", color: "#cce5ff" },
    { name: "diazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "dmaa", category: "Stimulants", color: "#ffcccb" },
    { name: "ephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "ethylamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "ethylone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "fenetylline", category: "Uncategorized", color: "#d9d9d9" },
    { name: "fentanyl", category: "Opioids", color: "#cce5ff" },
    { name: "flephedrone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "flephedrone 2", category: "Uncategorized", color: "#d9d9d9" },
    { name: "formamide", category: "Precursors", color: "#f0e68c" },
    { name: "heroin", category: "Uncategorized", color: "#d9d9d9" },
    { name: "hydrocodone", category: "Opioids", color: "#cce5ff" },
    { name: "hydroxy-norephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "hydroxycathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "lorazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "mda", category: "Uncategorized", color: "#d9d9d9" },
    { name: "mdea", category: "Uncategorized", color: "#d9d9d9" },
    { name: "mdma", category: "Uncategorized", color: "#d9d9d9" },
    { name: "mephedrone", category: "Stimulants", color: "#ffcccb" },
    { name: "methamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "methcathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "methylamine", category: "Precursors", color: "#f0e68c" },
    { name: "methylone", category: "Stimulants", color: "#ffcccb" },
    { name: "methylphenidate", category: "Stimulants", color: "#ffcccb" },
    { name: "modafinil", category: "Stimulants", color: "#ffcccb" },
    { name: "morphine", category: "Opioids", color: "#cce5ff" },
    { name: "n-acetylamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "n-formylamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "naloxone", category: "Opioids", color: "#cce5ff" },
    { name: "naltrexone", category: "Opioids", color: "#cce5ff" },
    { name: "naphyrone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "naphyrone 2", category: "Uncategorized", color: "#d9d9d9" },
    { name: "norephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "oxazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "oxycodone", category: "Opioids", color: "#cce5ff" },
    { name: "oxymorphone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "p2np", category: "Precursors", color: "#f0e68c" },
    { name: "pentobarbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "pentylone", category: "Uncategorized", color: "#d9d9d9" },
    { name: "phenobarbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "phenylacetic-acid", category: "Precursors", color: "#f0e68c" },
    { name: "phenylpropanolamine", category: "Other", color: "#d1d1e0" },
    { name: "pmma", category: "Other", color: "#d1d1e0" },
    { name: "pseudoephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "secobarbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "n-ethylhexedrone", category: "Stimulants", color: "#ffcccb" },
    { name: "3-mmc", category: "Stimulants", color: "#ffcccb" },
    { name: "thiopental", category: "Barbiturates", color: "#fff0b3" }
];

let currentLang = "en";
let filteredSubstances = [...substances];

function toggleLanguage() {
    currentLang = currentLang === "en" ? "ar" : "en";
    document.getElementById("langBtn").innerText = currentLang === "en" ? "Ř§ŮŘšŘąŘ¨ŮŘŠ" : "English";
    document.getElementById("title").innerText = currentLang === "en" ? "LCMS Substance Finder" : "Ř¨Ř§Ř­ŘŤ Ř§ŮŮŮŘ§ŘŻ Ř§ŮŘŞŘ­ŮŮŮŮŘŠ";
    document.getElementById("searchBox").placeholder = currentLang === "en" ? "Search for a substance..." : "Ř§Ř¨Ř­ŘŤ ŘšŮ ŮŘ§ŘŻŘŠ...";
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
        card.onclick = () => {
    const fileName = sub.name.toLowerCase().replace(/\s+/g, '-');
    window.location.href = `substances/${fileName}.html`;
};
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
    const results = substances.filter(s => s.name.toLowerCase().startsWith(letter.toLowerCase()));
    currentPage = 1;
    renderCards(results);
}

renderCards(filteredSubstances);
