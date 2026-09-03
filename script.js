// Sample news data
const newsData = [
    {
        id: 1,
        title: "Markets Rally on Positive Economic Data",
        description: "Stock markets surge as latest economic indicators show strong growth and reduced inflation concerns.",
        category: "business",
        image: "https://images.unsplash.com/photo-1611974041496-b80cadc8bb14?w=500&h=300&fit=crop",
        content: "Markets rallied strongly today on the back of positive economic data. The latest reports show that inflation is cooling faster than expected, while employment remains robust. Analysts believe this sets the stage for potential interest rate cuts in the coming months.",
        author: "Financial Times",
        time: "2 hours ago",
        featured: true
    },
    {
        id: 2,
        title: "Tech Giants Announce New AI Initiatives",
        description: "Leading technology companies unveil groundbreaking artificial intelligence projects for 2024.",
        category: "technology",
        image: "https://images.unsplash.com/photo-1677442d019cecf8f146f4d1dd91df62a4b309b02?w=500&h=300&fit=crop",
        content: "Major technology companies have announced their latest AI initiatives, promising to revolutionize various industries. From healthcare to education, these new projects aim to improve efficiency and create better user experiences.",
        author: "TechCrunch",
        time: "3 hours ago",
        featured: true
    },
    {
        id: 3,
        title: "National Team Wins Championship Title",
        description: "In an thrilling final match, the national team clinches the championship with a dramatic victory.",
        category: "sports",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
        content: "The national team secured the championship title with an impressive display of skill and determination. Thousands of fans celebrated the victory as their team claimed the trophy in a nail-biting finale.",
        author: "Sports Central",
        time: "4 hours ago",
        featured: false
    },
    {
        id: 4,
        title: "New Healthcare Breakthrough Announced",
        description: "Researchers announce a major breakthrough in the treatment of a previously incurable disease.",
        category: "health",
        image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=500&h=300&fit=crop",
        content: "Scientists have announced a significant breakthrough in medical treatment that could change the lives of millions. The new therapy has shown promising results in clinical trials and is expected to be available to patients within two years.",
        author: "Medical News Today",
        time: "5 hours ago",
        featured: false
    },
    {
        id: 5,
        title: "New Movie Breaks Box Office Records",
        description: "Latest blockbuster film shatters previous opening weekend records with massive ticket sales.",
        category: "entertainment",
        image: "https://images.unsplash.com/photo-1533613220915-609f5a6b39ca?w=500&h=300&fit=crop",
        content: "The highly anticipated movie has broken all box office records for opening weekend, surpassing industry expectations. Audiences praised the film for its compelling storyline and stellar performances.",
        author: "Entertainment Weekly",
        time: "6 hours ago",
        featured: false
    },
    {
        id: 6,
        title: "Government Announces Policy Reform",
        description: "New legislation passed to address long-standing concerns in multiple sectors.",
        category: "politics",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&h=300&fit=crop",
        content: "Parliament has passed significant new legislation aimed at addressing various societal concerns. The reform is expected to have far-reaching implications for businesses and citizens alike.",
        author: "News Network",
        time: "7 hours ago",
        featured: false
    },
    {
        id: 7,
        title: "Environmental Protection Initiative Launched",
        description: "Global initiative aims to reduce carbon emissions and protect endangered species.",
        category: "politics",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        content: "A comprehensive environmental initiative has been launched to combat climate change and preserve biodiversity. The program involves multiple countries and organizations working together towards a sustainable future.",
        author: "Green Planet News",
        time: "8 hours ago",
        featured: false
    },
    {
        id: 8,
        title: "New Startup Raises Record Funding",
        description: "Innovative startup secures massive investment to expand operations globally.",
        category: "business",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        content: "A promising startup has successfully raised the largest funding round in its category, attracting investment from top venture capital firms. The capital will be used to accelerate product development and expand into new markets.",
        author: "Venture Beat",
        time: "9 hours ago",
        featured: false
    }
];

let currentPage = 0;
const articlesPerPage = 6;
let filteredNews = [...newsData];

// DOM Elements
const newsGrid = document.getElementById('newsGrid');
const featuredNews = document.getElementById('featuredNews');
const navLinks = document.querySelectorAll('.nav-link');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const themeToggle = document.getElementById('themeToggle');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modal = document.getElementById('articleModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');
const tickerText = document.getElementById('tickerText');

// Ticker messages
const tickerMessages = [
    "Breaking News: Markets rally on positive economic data...",
    "🔴 LIVE: Major technology companies announce new AI initiatives...",
    "BREAKING: National team wins championship title in thrilling finale...",
    "LIVE UPDATE: New healthcare breakthrough announced by researchers...",
    "ALERT: New movie breaks box office records on opening weekend..."
];

let tickerIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    displayFeaturedNews();
    displayNews();
    setupEventListeners();
    startTicker();
});

// Setup Event Listeners
function setupEventListeners() {
    // Category filter
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const category = link.dataset.category;
            filterNews(category);
        });
    });

    // Load More
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        displayNews();
    });

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Search
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });

    // Modal
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Display Featured News
function displayFeaturedNews() {
    const featured = newsData.filter(news => news.featured);
    featuredNews.innerHTML = featured.map(news => createNewsCard(news)).join('');
    addCardEventListeners();
}

// Display News
function displayNews() {
    const startIndex = currentPage * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const newsToDisplay = filteredNews.slice(startIndex, endIndex);

    if (currentPage === 0) {
        newsGrid.innerHTML = '';
    }

    newsToDisplay.forEach(news => {
        const card = document.createElement('div');
        card.innerHTML = createNewsCard(news);
        newsGrid.appendChild(card.firstElementChild);
    });

    addCardEventListeners();

    // Hide load more if no more articles
    if (endIndex >= filteredNews.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

// Create News Card HTML
function createNewsCard(news) {
    const badge = news.featured ? '<span class="news-badge">FEATURED</span>' : '';
    return `
        <div class="news-card" data-id="${news.id}">
            <div class="news-image" style="background-image: url('${news.image}'); background-size: cover; background-position: center;">
                ${badge}
            </div>
            <div class="news-content">
                <span class="news-category">${news.category}</span>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-description">${news.description}</p>
                <div class="news-meta">
                    <span class="news-time">🕐 ${news.time}</span>
                    <span class="news-source">${news.author}</span>
                </div>
            </div>
        </div>
    `;
}

// Add Click Event Listeners to Cards
function addCardEventListeners() {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const newsId = card.dataset.id;
            const news = newsData.find(n => n.id == newsId);
            if (news) openModal(news);
        });
    });
}

// Filter News by Category
function filterNews(category) {
    currentPage = 0;
    if (category === 'all') {
        filteredNews = [...newsData];
    } else {
        filteredNews = newsData.filter(news => news.category === category);
    }
    newsGrid.innerHTML = '';
    displayNews();
}

// Search News
function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === '') {
        filteredNews = [...newsData];
    } else {
        filteredNews = newsData.filter(news =>
            news.title.toLowerCase().includes(searchTerm) ||
            news.description.toLowerCase().includes(searchTerm) ||
            news.content.toLowerCase().includes(searchTerm)
        );
    }
    currentPage = 0;
    newsGrid.innerHTML = '';
    displayNews();
}

// Modal Functions
function openModal(news) {
    modalBody.innerHTML = `
        <h2>${news.title}</h2>
        <div style="color: #666; margin-bottom: 15px;">
            <span class="news-category">${news.category}</span>
            <span style="margin-left: 15px;">🕐 ${news.time}</span>
            <span style="margin-left: 15px; font-weight: bold; color: var(--primary-color);">${news.author}</span>
        </div>
        <img src="${news.image}" alt="${news.title}">
        <p>${news.content}</p>
    `;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon();
}

function loadTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Ticker Function
function startTicker() {
    setInterval(() => {
        tickerIndex = (tickerIndex + 1) % tickerMessages.length;
        tickerText.textContent = tickerMessages[tickerIndex];
    }, 5000);
}

// Simulate live updates
function simulateLiveUpdates() {
    setInterval(() => {
        // Update ticker with new messages
        const updates = [
            "Market update: Tech stocks rising...",
            "Breaking: New policy announcement expected soon...",
            "Sports: Team advances to finals...",
            "Weather alert: Sunny weather expected..."
        ];
        const randomUpdate = updates[Math.floor(Math.random() * updates.length)];
        tickerText.textContent = randomUpdate;
    }, 8000);
}

// Initialize live updates
simulateLiveUpdates();