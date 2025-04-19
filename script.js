
const substances = [
    { name: "Amphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "Methamphetamine", category: "Stimulants", color: "#ffcccb" },
    { name: "MDMA", category: "Stimulants", color: "#ffcccb" },
    { name: "MDA", category: "Stimulants", color: "#ffcccb" },
    { name: "MDEA", category: "Stimulants", color: "#ffcccb" },
    { name: "Ephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "Pseudoephedrine", category: "Stimulants", color: "#ffcccb" },
    { name: "Fenetylline", category: "Stimulants", color: "#ffcccb" },
    { name: "Cathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "Methcathinone", category: "Stimulants", color: "#ffcccb" },
    { name: "Morphine", category: "Opioids", color: "#cce5ff" },
    { name: "Codeine", category: "Opioids", color: "#cce5ff" },
    { name: "Thebaine", category: "Opioids", color: "#cce5ff" },
    { name: "Oxycodone", category: "Opioids", color: "#cce5ff" },
    { name: "Hydrocodone", category: "Opioids", color: "#cce5ff" },
    { name: "Fentanyl", category: "Opioids", color: "#cce5ff" },
    { name: "Carfentanil", category: "Opioids", color: "#cce5ff" },
    { name: "Ketobemidone", category: "Opioids", color: "#cce5ff" },
    { name: "Tramadol", category: "Opioids", color: "#cce5ff" },
    { name: "Heroin", category: "Opioids", color: "#cce5ff" },
    { name: "Diazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Oxazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Lorazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Clonazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Alprazolam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Nitrazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Temazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Flurazepam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Midazolam", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Chlordiazepoxide", category: "Benzodiazepines", color: "#e6ccff" },
    { name: "Cannabis", category: "Cannabinoids", color: "#b6d7a8" },
    { name: "Zopiclone", category: "Hypnotics", color: "#f0e0f8" },
    { name: "Zolpidem", category: "Hypnotics", color: "#f0e0f8" },
    { name: "Zaleplon", category: "Hypnotics", color: "#f0e0f8" },
    { name: "Eszopiclone", category: "Hypnotics", color: "#f0e0f8" },
    { name: "Barbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "Phenobarbital", category: "Barbiturates", color: "#fff0b3" },
    { name: "LSD", category: "Hallucinogens", color: "#ffe0f0" },
    { name: "Mescaline", category: "Hallucinogens", color: "#ffe0f0" },
    { name: "Psilocin", category: "Hallucinogens", color: "#ffe0f0" },
    { name: "Psilocybin", category: "Hallucinogens", color: "#ffe0f0" },
    { name: "Bufotenine", category: "Hallucinogens", color: "#ffe0f0" },
    { name: "SalvinorinA", category: "Hallucinogens", color: "#ffe0f0" },
    { name: "Ketamine", category: "Dissociatives", color: "#d5f4e6" },
    { name: "Scopolamine", category: "Toxins", color: "#f9e79f" },
    { name: "Atropine", category: "Toxins", color: "#f9e79f" },
    { name: "Ricin", category: "Toxins", color: "#f9e79f" },
    { name: "Thallium", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Arsenic", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "CarbonMonoxide", category: "Gases", color: "#f2f2f2" },
    { name: "P2NP", category: "Precursors", color: "#f0e68c" },
    { name: "GHB", category: "Depressants", color: "#f4cccc" },
    { name: "Cyanide", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Strychnine", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Nicotine", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Caffeine", category: "Antihistamines", color: "#fddde6" },
    { name: "Paracetamol", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Ibuprofen", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "Aspirin", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "Diclofenac", category: "Organophosphates", color: "#fbeec1" },
    { name: "Chlorpromazine", category: "Carbamates", color: "#fff3cd" },
    { name: "Haloperidol", category: "Herbicides", color: "#e1f5d0" },
    { name: "Olanzapine", category: "Insecticides", color: "#fdebd0" },
    { name: "Quetiapine", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Clozapine", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "Risperidone", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "Methadone", category: "Halogens", color: "#d1e0e0" },
    { name: "Buprenorphine", category: "Metalloids", color: "#e8e8e8" },
    { name: "Naloxone", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "Naltrexone", category: "Rodenticides", color: "#f8d7da" },
    { name: "Meperidine", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "Dextromethorphan", category: "Gases", color: "#e0e0e0" },
    { name: "Bromazepam", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Etizolam", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Clobazam", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Phenazepam", category: "Antihistamines", color: "#fddde6" },
    { name: "Flunitrazepam", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Estazolam", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "Lormetazepam", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "Cyclobenzaprine", category: "Organophosphates", color: "#fbeec1" },
    { name: "ChloralHydrate", category: "Carbamates", color: "#fff3cd" },
    { name: "Diphenhydramine", category: "Herbicides", color: "#e1f5d0" },
    { name: "Promethazine", category: "Insecticides", color: "#fdebd0" },
    { name: "Hydroxyzine", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Meclizine", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "Prochlorperazine", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "SodiumNitrite", category: "Halogens", color: "#d1e0e0" },
    { name: "SodiumAzide", category: "Metalloids", color: "#e8e8e8" },
    { name: "Mercury", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "Lead", category: "Rodenticides", color: "#f8d7da" },
    { name: "Cadmium", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "Barium", category: "Gases", color: "#e0e0e0" },
    { name: "Benzene", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Toluene", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Xylene", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Acetone", category: "Antihistamines", color: "#fddde6" },
    { name: "Ethanol", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Methanol", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "Isopropanol", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "EthyleneGlycol", category: "Organophosphates", color: "#fbeec1" },
    { name: "Formaldehyde", category: "Carbamates", color: "#fff3cd" },
    { name: "HydrogenSulfide", category: "Herbicides", color: "#e1f5d0" },
    { name: "Ammonia", category: "Insecticides", color: "#fdebd0" },
    { name: "Phosphine", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Fluoride", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "Chlorine", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "Bromine", category: "Halogens", color: "#d1e0e0" },
    { name: "Iodine", category: "Metalloids", color: "#e8e8e8" },
    { name: "SulfurDioxide", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "NitrogenDioxide", category: "Rodenticides", color: "#f8d7da" },
    { name: "CarbonTetrachloride", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "Chloroform", category: "Gases", color: "#e0e0e0" },
    { name: "DiethylEther", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Acetonitrile", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Tetrahydrofuran", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Trichloroethylene", category: "Antihistamines", color: "#fddde6" },
    { name: "Perchloroethylene", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Dimethylformamide", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "DMSO", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "Nitroglycerin", category: "Organophosphates", color: "#fbeec1" },
    { name: "PicricAcid", category: "Carbamates", color: "#fff3cd" },
    { name: "PetroleumEther", category: "Herbicides", color: "#e1f5d0" },
    { name: "WhitePhosphorus", category: "Insecticides", color: "#fdebd0" },
    { name: "YellowPhosphorus", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "ZincPhosphide", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "AluminumPhosphide", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "Warfarin", category: "Halogens", color: "#d1e0e0" },
    { name: "Brodifacoum", category: "Metalloids", color: "#e8e8e8" },
    { name: "SodiumFluoroacetate", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "Thiacloprid", category: "Rodenticides", color: "#f8d7da" },
    { name: "Imidacloprid", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "Paraquat", category: "Gases", color: "#e0e0e0" },
    { name: "Diquat", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Glyphosate", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Atrazine", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Malathion", category: "Antihistamines", color: "#fddde6" },
    { name: "Diazinon", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Chlorpyrifos", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "DDT", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "Endosulfan", category: "Organophosphates", color: "#fbeec1" },
    { name: "Aldicarb", category: "Carbamates", color: "#fff3cd" },
    { name: "Carbofuran", category: "Herbicides", color: "#e1f5d0" },
    { name: "Methomyl", category: "Insecticides", color: "#fdebd0" },
    { name: "Temephos", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Phorate", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "Fenthion", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "Coumaphos", category: "Halogens", color: "#d1e0e0" },
    { name: "NicotineSulfate", category: "Metalloids", color: "#e8e8e8" },
    { name: "Cyanazine", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "Heptachlor", category: "Rodenticides", color: "#f8d7da" },
    { name: "Lindane", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "ArsenicTrioxide", category: "Gases", color: "#e0e0e0" },
    { name: "Antimony", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Bismuth", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Selenium", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Tellurium", category: "Antihistamines", color: "#fddde6" },
    { name: "Uranium", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Thorium", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "Polonium", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "Radium", category: "Organophosphates", color: "#fbeec1" },
    { name: "Plutonium", category: "Carbamates", color: "#fff3cd" },
    { name: "Cesium137", category: "Herbicides", color: "#e1f5d0" },
    { name: "Cobalt60", category: "Insecticides", color: "#fdebd0" },
    { name: "Strontium90", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Iodine131", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "Americium241", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "Cesium", category: "Halogens", color: "#d1e0e0" },
    { name: "Rubidium", category: "Metalloids", color: "#e8e8e8" },
    { name: "Beryllium", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "Nickel", category: "Rodenticides", color: "#f8d7da" },
    { name: "Chromium", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "Vanadium", category: "Gases", color: "#e0e0e0" },
    { name: "Titanium", category: "Neuroleptics", color: "#d4e1fa" },
    { name: "Manganese", category: "Antidepressants", color: "#ffe0b3" },
    { name: "Iron", category: "NSAIDs", color: "#e2f0cb" },
    { name: "Copper", category: "Antihistamines", color: "#fddde6" },
    { name: "Zinc", category: "Muscle Relaxants", color: "#e8f6f3" },
    { name: "Silver", category: "Toxic Alcohols", color: "#f7c6c7" },
    { name: "Gold", category: "Volatile Solvents", color: "#d9edf7" },
    { name: "Platinum", category: "Organophosphates", color: "#fbeec1" },
    { name: "Palladium", category: "Carbamates", color: "#fff3cd" },
    { name: "Rhodium", category: "Herbicides", color: "#e1f5d0" },
    { name: "Iridium", category: "Insecticides", color: "#fdebd0" },
    { name: "Osmium", category: "Heavy Metals", color: "#d6d6d6" },
    { name: "Ruthenium", category: "Radioactive Elements", color: "#f5e1f7" },
    { name: "Tantalum", category: "Industrial Chemicals", color: "#f4f4f4" },
    { name: "Niobium", category: "Halogens", color: "#d1e0e0" },
    { name: "Hafnium", category: "Metalloids", color: "#e8e8e8" },
    { name: "Zirconium", category: "Alkylating Agents", color: "#d3f9d8" },
    { name: "Yttrium", category: "Rodenticides", color: "#f8d7da" },
    { name: "Scandium", category: "Nitrates & Nitrites", color: "#fff5cc" },
    { name: "Creatinine", category: "Other" }
];

let currentLang = "en";
let currentPage = 1;
const itemsPerPage = 20;

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

// Initial render
renderCards(filteredSubstances);

function filterByLetter(letter) {
    if (letter === "All") {
        renderCards(substances);
        return;
    }

    const results = substances.filter(s => s.name.toLowerCase().startsWith(letter.toLowerCase()));
    renderCards(results);
}
