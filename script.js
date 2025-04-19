
let currentPage = 1;
const itemsPerPage = 20;

const substances = [
    { name: "Amphetamine", category: "Stimulants", color: "#ffcccb" },
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
    currentPage = 1; // نبدأ من الصفحة الأولى
    renderCards(filteredSubstances);
}

function searchSubstances() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const results = substances.filter(s => s.name.toLowerCase().includes(query));
    currentPage = 1; // نبدأ من الصفحة الأولى
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

function renderPagination(totalItems) {
    const itemsPerPage = 20;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginationContainer = document.getElementById("paginationContainer");
    paginationContainer.innerHTML = ""; // تنظيف الأزرار القديمة

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.innerText = i;
        if (i === currentPage) {
            btn.classList.add("active");
        }
        btn.onclick = () => goToPage(i);
        paginationContainer.appendChild(btn);
    }
}
    // Initial render
renderCards(filteredSubstances);

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
