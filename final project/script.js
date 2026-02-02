// Data for exhibits, artists, and products
const exhibitsData = [
    {
        id: 1,
        title: "Starry Night",
        artist: "Vincent van Gogh",
        era: "Post-Impressionism",
        year: 1889,
        description: "One of the most recognized paintings in Western art, depicting the view from the east-facing window of Van Gogh's asylum room.",
        image: "Van Gogh Starry Night.jpg",
        category: "modern",
        popularity: 95,
        medium: "Oil on canvas",
        dimensions: "73.7 cm × 92.1 cm",
        location: "Museum of Modern Art, New York"
    },
    {
        id: 2,
        title: "Mona Lisa",
        artist: "Leonardo da Vinci",
        era: "Renaissance",
        year: 1503,
        description: "A half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance.",
        image: "monalisa.jpg",
        category: "classical",
        popularity: 98,
        medium: "Oil on poplar panel",
        dimensions: "77 cm × 53 cm",
        location: "Louvre Museum, Paris"
    },
    {
        id: 3,
        title: "Suffering",
        artist: "Bruce Onobrakpeya",
        era: "Expressionism",
        year: 1983,
        description: "A composition created by a nigerian artist who blended bibilical references to his art",
        image: "Onobrakpeya-Bruce_Suffering.jpg",
        category: "modern",
        popularity: 90,
        medium: "Oil, tempera, pastel on cardboard",
        dimensions: "91 cm × 73.5 cm",
        location: "National Gallery, Oslo"
    },
    {
        id: 4,
        title: "Girl with a Pearl Earring",
        artist: "Johannes Vermeer",
        era: "Dutch Golden Age",
        year: 1665,
        description: "An oil painting by Dutch Golden Age painter Johannes Vermeer. It is a tronie, not a portrait, of a girl wearing a headscarf and a pearl earring.",
        image: "1665 Girl with a Pearl Earring.jpg",
        category: "classical",
        popularity: 92,
        medium: "Oil on canvas",
        dimensions: "44.5 cm × 39 cm",
        location: "Mauritshuis, The Hague"
    },
    {
        id: 5,
        title: "The Persistence of Memory",
        artist: "Salvador Dalí",
        era: "Surrealism",
        year: 1931,
        description: "A painting by artist Salvador Dalí, and one of the most recognizable works of Surrealism. The painting depicts melting clocks in a landscape.",
        image: "persistence of memory.jpg",
        category: "modern",
        popularity: 88,
        medium: "Oil on canvas",
        dimensions: "24 cm × 33 cm",
        location: "Museum of Modern Art, New York"
    },
    {
        id: 6,
        title: "The Night Watch",
        artist: "Rembrandt van Rijn",
        era: "Dutch Golden Age",
        year: 1642,
        description: "A painting by Rembrandt van Rijn. It is in the collection of the Amsterdam Museum but is prominently displayed in the Rijksmuseum.",
        image: "the night watch.webp",
        category: "historical",
        popularity: 85,
        medium: "Oil on canvas",
        dimensions: "363 cm × 437 cm",
        location: "Rijksmuseum, Amsterdam"
    }
];

const artistsData = [
    {
        id: 1,
        name: "Vincent van Gogh",
        era: "Post-Impressionism",
        style: "Expressionist, Symbolist",
        bio: "A Dutch Post-Impressionist painter who is among the most famous and influential figures in Western art history.",
        image: "vincent.avif",
        works: ["Starry Night", "Sunflowers", "The Potato Eaters"]
    },
    {
        id: 2,
        name: "Leonardo da Vinci",
        era: "Renaissance",
        style: "High Renaissance",
        bio: "An Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.",
        image: "da vinci.avif",
        works: ["Mona Lisa", "The Last Supper", "Vitruvian Man"]
    },
    {
        id: 3,
        name: "Pablo Picasso",
        era: "Modern",
        style: "Cubism, Surrealism",
        bio: "A Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France.",
        image: "picasso.jpg",
        works: ["Guernica", "Les Demoiselles d'Avignon", "The Weeping Woman"]
    },
    {
        id: 4,
        name: "Bruce Onobrakpeya",
        era: "Impressionism",
        style: "Impressionism",
        bio: "Bruce Onobrakpeya was born in Agbarha-Otor in Delta State, the son of an Urhobo carver",
        image: "Bruce_Onobrakpeya.jpeg",
        works: ["Suffering", "Bokolo", "Udju mara"]
    }
];

const productsData = [
    {
        id: 1,
        name: "Starry Night Poster",
        price: 24.99,
        image: "Van Gogh Starry Night.jpg",
        description: "High-quality art print of Van Gogh's masterpiece"
    },
    {
        id: 2,
        name: "Museum Art Book",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Hardcover book featuring 500 museum masterpieces"
    },
    {
        id: 3,
        name: "Artist Tote Bag",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Canvas tote bag with famous artwork prints"
    },
    {
        id: 4,
        name: "Art Postcard Set",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        description: "Set of 12 high-quality art postcards"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initCarousel();
    initCounters();
    initExhibits();
    initArtists();
    initEvents();
    initShop();
    initAccessibility();
    initContactForm();
    initModal();
    initFavorites();
    initDashboard();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// 1. Navigation Functions
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
            
            // Handle filter links
            const filter = this.getAttribute('data-filter');
            if (filter) {
                // This would filter exhibits or artists based on the filter
                console.log(`Filter by: ${filter}`);
            }
        });
    });
    
    // Handle dropdowns on mobile
    const dropdownParents = document.querySelectorAll('.nav-links li:has(.dropdown), .nav-links li.mega');
    dropdownParents.forEach(parent => {
        const link = parent.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = parent.querySelector('.dropdown, .mega-menu');
                dropdown.classList.toggle('active');
            }
        });
    });
}

// 2. Carousel Functions
function initCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentSlide = 0;
    
    // Initialize first slide
    carouselItems[0].classList.add('active');
    carouselDots[0].classList.add('active');
    
    // Dot click events
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            // Remove active classes
            carouselItems.forEach(item => item.classList.remove('active'));
            carouselDots.forEach(d => d.classList.remove('active'));
            
            // Add active classes to current
            carouselItems[index].classList.add('active');
            dot.classList.add('active');
            currentSlide = index;
        });
    });
    
    // Auto-advance carousel
    setInterval(function() {
        // Remove active classes
        carouselItems[currentSlide].classList.remove('active');
        carouselDots[currentSlide].classList.remove('active');
        
        // Move to next slide
        currentSlide = (currentSlide + 1) % carouselItems.length;
        
        // Add active classes
        carouselItems[currentSlide].classList.add('active');
        carouselDots[currentSlide].classList.add('active');
    }, 5000);
}

// 3. Animated Counters
function initCounters() {
    const totalExhibits = document.getElementById('totalExhibits');
    const totalArtists = document.getElementById('totalArtists');
    const totalVisitors = document.getElementById('totalVisitors');
    
    animateCounter(totalExhibits, 0, 156, 2000);
    animateCounter(totalArtists, 0, 89, 2000);
    animateCounter(totalVisitors, 0, 1247, 2000);
    
    function animateCounter(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
}

// 4. Exhibits Functions
function initExhibits() {
    const exhibitsGrid = document.getElementById('exhibitsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn[data-filter]');
    const filterOptions = document.querySelectorAll('.filter-option[data-filter]');
    const sortOptions = document.querySelectorAll('.filter-option[data-sort]');
    const searchBox = document.getElementById('searchBox');
    const searchResults = document.getElementById('searchResults');
    const compareSelect1 = document.getElementById('compareSelect1');
    const compareSelect2 = document.getElementById('compareSelect2');
    const compareDisplay1 = document.getElementById('compareDisplay1');
    const compareDisplay2 = document.getElementById('compareDisplay2');
    
    let currentFilter = 'all';
    let currentSort = 'popularity';
    let currentEraFilter = null;
    
    // Render exhibits
    function renderExhibits() {
        exhibitsGrid.innerHTML = '';
        
        let filteredExhibits = [...exhibitsData];
        
        // Apply category filter
        if (currentFilter !== 'all') {
            filteredExhibits = filteredExhibits.filter(exhibit => exhibit.category === currentFilter);
        }
        
        // Apply era filter
        if (currentEraFilter) {
            filteredExhibits = filteredExhibits.filter(exhibit => exhibit.era.toLowerCase().includes(currentEraFilter.toLowerCase()));
        }
        
        // Apply sorting
        switch(currentSort) {
            case 'popularity':
                filteredExhibits.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'date-new':
                filteredExhibits.sort((a, b) => b.year - a.year);
                break;
            case 'date-old':
                filteredExhibits.sort((a, b) => a.year - b.year);
                break;
            case 'alphabetical':
                filteredExhibits.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
        
        // Generate exhibit cards
        filteredExhibits.forEach(exhibit => {
            const exhibitCard = document.createElement('div');
            exhibitCard.className = 'exhibit-card fade-in';
            exhibitCard.innerHTML = `
                <img src="${exhibit.image}" alt="${exhibit.title}" class="exhibit-image">
                <div class="exhibit-info">
                    <h3>${exhibit.title}</h3>
                    <div class="exhibit-meta">
                        <span>${exhibit.artist}</span>
                        <span>${exhibit.year}</span>
                    </div>
                    <p class="exhibit-description">${exhibit.description.substring(0, 100)}...</p>
                    <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                        <button class="btn view-exhibit-btn" data-id="${exhibit.id}">View Details</button>
                        <button class="btn btn-accent add-favorite-btn" data-id="${exhibit.id}">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            `;
            exhibitsGrid.appendChild(exhibitCard);
        });
        
        // Update compare dropdowns
        updateCompareDropdowns(filteredExhibits);
        
        // Add event listeners to view buttons
        document.querySelectorAll('.view-exhibit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const exhibitId = parseInt(this.getAttribute('data-id'));
                openExhibitModal(exhibitId);
            });
        });
        
        // Add event listeners to favorite buttons
        document.querySelectorAll('.add-favorite-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const exhibitId = parseInt(this.getAttribute('data-id'));
                addToFavorites(exhibitId);
            });
        });
    }
    
    // Update compare dropdowns
    function updateCompareDropdowns(exhibits) {
        compareSelect1.innerHTML = '<option value="">Select first exhibit to compare</option>';
        compareSelect2.innerHTML = '<option value="">Select second exhibit to compare</option>';
        
        exhibits.forEach(exhibit => {
            const option1 = document.createElement('option');
            option1.value = exhibit.id;
            option1.textContent = `${exhibit.title} by ${exhibit.artist}`;
            compareSelect1.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = exhibit.id;
            option2.textContent = `${exhibit.title} by ${exhibit.artist}`;
            compareSelect2.appendChild(option2);
        });
        
        // Add event listeners to compare dropdowns
        compareSelect1.addEventListener('change', function() {
            const exhibitId = parseInt(this.value);
            if (exhibitId) {
                const exhibit = exhibitsData.find(e => e.id === exhibitId);
                compareDisplay1.innerHTML = `
                    <h4>${exhibit.title}</h4>
                    <p><strong>Artist:</strong> ${exhibit.artist}</p>
                    <p><strong>Year:</strong> ${exhibit.year}</p>
                    <p><strong>Era:</strong> ${exhibit.era}</p>
                    <p>${exhibit.description.substring(0, 150)}...</p>
                `;
            } else {
                compareDisplay1.innerHTML = '';
            }
        });
        
        compareSelect2.addEventListener('change', function() {
            const exhibitId = parseInt(this.value);
            if (exhibitId) {
                const exhibit = exhibitsData.find(e => e.id === exhibitId);
                compareDisplay2.innerHTML = `
                    <h4>${exhibit.title}</h4>
                    <p><strong>Artist:</strong> ${exhibit.artist}</p>
                    <p><strong>Year:</strong> ${exhibit.year}</p>
                    <p><strong>Era:</strong> ${exhibit.era}</p>
                    <p>${exhibit.description.substring(0, 150)}...</p>
                `;
            } else {
                compareDisplay2.innerHTML = '';
            }
        });
    }
    
    // Filter button events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            
            // Render exhibits with new filter
            renderExhibits();
        });
    });
    
    // Era filter options
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all filter options
            filterOptions.forEach(o => o.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update current era filter
            currentEraFilter = this.getAttribute('data-filter');
            
            // Render exhibits with new filter
            renderExhibits();
        });
    });
    
    // Sort options
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all sort options
            sortOptions.forEach(o => o.classList.remove('active'));
            
            // Add active class to clicked option
            this.classList.add('active');
            
            // Update current sort
            currentSort = this.getAttribute('data-sort');
            
            // Render exhibits with new sort
            renderExhibits();
        });
    });
    
    // Search functionality
    searchBox.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query.length === 0) {
            searchResults.style.display = 'none';
            return;
        }
        
        // Filter exhibits based on search query
        const results = exhibitsData.filter(exhibit => 
            exhibit.title.toLowerCase().includes(query) ||
            exhibit.artist.toLowerCase().includes(query) ||
            exhibit.era.toLowerCase().includes(query) ||
            exhibit.description.toLowerCase().includes(query)
        );
        
        // Display results
        if (results.length > 0) {
            searchResults.innerHTML = '';
            results.forEach(exhibit => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <h4>${exhibit.title}</h4>
                    <p>${exhibit.artist} • ${exhibit.year} • ${exhibit.era}</p>
                `;
                resultItem.addEventListener('click', function() {
                    searchBox.value = '';
                    searchResults.style.display = 'none';
                    openExhibitModal(exhibit.id);
                });
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.style.display = 'block';
        }
    });
    
    // Hide search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Initial render
    renderExhibits();
}

// 5. Artists Functions
function initArtists() {
    const artistsGrid = document.getElementById('artistsGrid');
    const filterBtns = document.querySelectorAll('#artists .filter-btn');
    
    let currentFilter = 'all';
    
    // Render artists
    function renderArtists() {
        artistsGrid.innerHTML = '';
        
        let filteredArtists = [...artistsData];
        
        // Apply filter
        if (currentFilter !== 'all') {
            filteredArtists = filteredArtists.filter(artist => 
                artist.era.toLowerCase().includes(currentFilter.toLowerCase()) ||
                artist.style.toLowerCase().includes(currentFilter.toLowerCase())
            );
        }
        
        // Generate artist cards
        filteredArtists.forEach(artist => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card fade-in';
            artistCard.innerHTML = `
                <div class="artist-card-inner">
                    <div class="artist-card-front">
                        <img src="${artist.image}" alt="${artist.name}" class="artist-portrait">
                        <div class="artist-info">
                            <h3>${artist.name}</h3>
                            <div class="artist-era">${artist.era}</div>
                            <p>${artist.style}</p>
                        </div>
                    </div>
                    <div class="artist-card-back">
                        <h3>${artist.name}</h3>
                        <p>${artist.bio.substring(0, 150)}...</p>
                        <button class="btn view-artist-btn" data-id="${artist.id}" style="margin-top: 15px;">View Profile</button>
                    </div>
                </div>
            `;
            artistsGrid.appendChild(artistCard);
        });
        
        // Add event listeners to view buttons
        document.querySelectorAll('.view-artist-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card flip
                const artistId = parseInt(this.getAttribute('data-id'));
                openArtistModal(artistId);
            });
        });
    }
    
    // Filter button events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all filter buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            
            // Render artists with new filter
            renderArtists();
        });
    });
    
    // Initial render
    renderArtists();
}

// 6. Events Functions
function initEvents() {
    // Countdown timers
    function updateCountdown() {
        // Event 1: May 15, 2026
        const event1Date = new Date('june 15, 2026 14:00:00').getTime();
        updateTimer(event1Date, 'countdown1');
        
        // Event 2: May 22, 2026
        const event2Date = new Date('june 22, 2026 18:00:00').getTime();
        updateTimer(event2Date, 'countdown2');
    }
    
    function updateTimer(eventDate, prefix) {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById(`${prefix}`).innerHTML = '<div style="color: var(--accent-color);">Event has ended</div>';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById(`days${prefix.charAt(prefix.length-1)}`).textContent = days.toString().padStart(2, '0');
        document.getElementById(`hours${prefix.charAt(prefix.length-1)}`).textContent = hours.toString().padStart(2, '0');
        document.getElementById(`minutes${prefix.charAt(prefix.length-1)}`).textContent = minutes.toString().padStart(2, '0');
        document.getElementById(`seconds${prefix.charAt(prefix.length-1)}`).textContent = seconds.toString().padStart(2, '0');
    }
    
    // Calendar
    function initCalendar() {
        const calendarGrid = document.getElementById('calendarGrid');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        
        let currentDate = new Date(2026, 5, 1); // June 2026
        
        function renderCalendar() {
            calendarGrid.innerHTML = '';
            
            // Day headers
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            days.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = day;
                dayElement.style.fontWeight = 'bold';
                calendarGrid.appendChild(dayElement);
            });
            
            // Get first day of month
            const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
            
            // Get days in month
            const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
            
            // Add empty cells for days before first day of month
            for (let i = 0; i < firstDay; i++) {
                const emptyElement = document.createElement('div');
                emptyElement.className = 'calendar-day';
                calendarGrid.appendChild(emptyElement);
            }
            
            // Add days of month
            for (let i = 1; i <= daysInMonth; i++) {
                const dayElement = document.createElement('div');
                dayElement.className = 'calendar-day';
                dayElement.textContent = i;
                
                // Highlight event days
                if (i === 15 || i === 22) {
                    dayElement.classList.add('active');
                    dayElement.title = i === 15 ? 'Virtual Tour: Impressionist Masters' : 'Modern Art Techniques Workshop';
                }
                
                calendarGrid.appendChild(dayElement);
            }
        }
        
        prevMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
        
        nextMonthBtn.addEventListener('click', function() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
        
        // Initial render
        renderCalendar();
    }
    
    // Initialize countdown and calendar
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initCalendar();
}

// 7. Shop Functions
function initShop() {
    const shopGrid = document.getElementById('shopGrid');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartSummary = document.getElementById('cartSummary');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Render products
    function renderProducts() {
        shopGrid.innerHTML = '';
        
        productsData.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card slide-up';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="btn add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            shopGrid.appendChild(productCard);
        });
        
        // Add event listeners to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                addToCart(productId);
            });
        });
    }
    
    // Add to cart
    function addToCart(productId) {
        const product = productsData.find(p => p.id === productId);
        
        // Check if product is already in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        // Save cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart display
        updateCartDisplay();
        
        // Show cart summary
        cartSummary.classList.add('active');
        
        // Hide cart summary after 5 seconds
        setTimeout(() => {
            cartSummary.classList.remove('active');
        }, 5000);
    }
    
    // Update cart display
    function updateCartDisplay() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<div style="text-align: center; color: #666;">Your cart is empty</div>';
            cartTotal.textContent = '$0.00';
            return;
        }
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div>
                    <div><strong>${item.name}</strong></div>
                    <div>$${item.price.toFixed(2)} × ${item.quantity}</div>
                </div>
                <div>
                    <strong>$${itemTotal.toFixed(2)}</strong>
                    <button class="remove-cart-item" data-id="${item.id}" style="margin-left: 10px; background: none; border: none; color: var(--accent-color); cursor: pointer;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        cartTotal.textContent = `$${total.toFixed(2)}`;
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-cart-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    
    // Remove from cart
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
    
    // Show cart on hover
    const shopSection = document.querySelector('.shop');
    shopSection.addEventListener('mouseenter', function() {
        cartSummary.classList.add('active');
    });
    
    cartSummary.addEventListener('mouseenter', function() {
        cartSummary.classList.add('active');
    });
    
    shopSection.addEventListener('mouseleave', function(e) {
        // Only hide if not hovering over cart summary
        if (!cartSummary.contains(e.relatedTarget)) {
            cartSummary.classList.remove('active');
        }
    });
    
    cartSummary.addEventListener('mouseleave', function(e) {
        // Only hide if not hovering over shop section
        if (!shopSection.contains(e.relatedTarget)) {
            cartSummary.classList.remove('active');
        }
    });
    
    // Initial render
    renderProducts();
    updateCartDisplay();
}

// 8. Accessibility Functions
function initAccessibility() {
    const themeToggle = document.getElementById('themeToggle');
    const footerThemeToggle = document.getElementById('footerThemeToggle');
    const fontIncrease = document.getElementById('fontIncrease');
    const fontDecrease = document.getElementById('fontDecrease');
    const resetAccessibility = document.getElementById('resetAccessibility');
    const backToTop = document.getElementById('backToTop');
    const accessibilityControls = document.getElementById('accessibilityControls');
    
    let fontSize = 100; // Percentage
    
    // Theme toggle
    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    }
    
    themeToggle.addEventListener('click', toggleTheme);
    footerThemeToggle.addEventListener('click', toggleTheme);
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').className = 'fas fa-sun';
    }
    
    // Font size controls
    fontIncrease.addEventListener('click', function() {
        if (fontSize < 150) {
            fontSize += 10;
            document.body.style.fontSize = fontSize + '%';
            localStorage.setItem('fontSize', fontSize);
        }
    });
    
    fontDecrease.addEventListener('click', function() {
        if (fontSize > 70) {
            fontSize -= 10;
            document.body.style.fontSize = fontSize + '%';
            localStorage.setItem('fontSize', fontSize);
        }
    });
    
    // Check for saved font size
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        fontSize = parseInt(savedFontSize);
        document.body.style.fontSize = fontSize + '%';
    }
    
    // Reset accessibility
    resetAccessibility.addEventListener('click', function() {
        document.body.classList.remove('dark-mode');
        themeToggle.querySelector('i').className = 'fas fa-moon';
        fontSize = 100;
        document.body.style.fontSize = '100%';
        localStorage.removeItem('theme');
        localStorage.removeItem('fontSize');
    });
    
    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Font controls toggle
    const fontControlsBtn = document.getElementById('fontControls');
    fontControlsBtn.addEventListener('click', function() {
        accessibilityControls.style.display = accessibilityControls.style.display === 'none' ? 'flex' : 'none';
    });
}

// 9. Contact Form Functions
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Reset errors
        document.querySelectorAll('.error').forEach(error => {
            error.style.display = 'none';
        });
        
        let isValid = true;
        
        // Validate name
        if (name.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }
        
        // Validate subject
        if (subject.trim() === '') {
            document.getElementById('subjectError').style.display = 'block';
            isValid = false;
        }
        
        // Validate message
        if (message.trim() === '') {
            document.getElementById('messageError').style.display = 'block';
            isValid = false;
        }
        
        // If form is valid, show success message
        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });
}

// 10. Modal Functions
function initModal() {
    const exhibitModal = document.getElementById('exhibitModal');
    const exhibitModalClose = document.getElementById('exhibitModalClose');
    const artistModal = document.getElementById('artistModal');
    const artistModalClose = document.getElementById('artistModalClose');
    
    // Close modals when clicking close button
    exhibitModalClose.addEventListener('click', function() {
        exhibitModal.classList.remove('active');
    });
    
    artistModalClose.addEventListener('click', function() {
        artistModal.classList.remove('active');
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === exhibitModal) {
            exhibitModal.classList.remove('active');
        }
        if (e.target === artistModal) {
            artistModal.classList.remove('active');
        }
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            exhibitModal.classList.remove('active');
            artistModal.classList.remove('active');
        }
    });
}

function openExhibitModal(exhibitId) {
    const exhibit = exhibitsData.find(e => e.id === exhibitId);
    const modal = document.getElementById('exhibitModal');
    
    if (!exhibit) return;
    
    // Populate modal with exhibit data
    document.getElementById('modalExhibitTitle').textContent = exhibit.title;
    document.getElementById('modalExhibitArtist').textContent = exhibit.artist;
    document.getElementById('modalExhibitDescription').textContent = exhibit.description;
    document.getElementById('modalExhibitYear').textContent = exhibit.year;
    document.getElementById('modalExhibitMedium').textContent = exhibit.medium;
    document.getElementById('modalExhibitDimensions').textContent = exhibit.dimensions;
    document.getElementById('modalExhibitLocation').textContent = exhibit.location;
    document.getElementById('modalExhibitImage').src = exhibit.image;
    document.getElementById('modalExhibitImage').alt = exhibit.title;
    
    // Set timeline data
    document.getElementById('timelineCreated').textContent = exhibit.year;
    document.getElementById('timelineFirstExhibition').textContent = exhibit.year + 5;
    document.getElementById('timelineAcquired').textContent = exhibit.year + 50;
    
    // Update add to favorites button
    const addToFavoritesBtn = document.getElementById('addToFavorites');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorite = favorites.includes(exhibitId);
    
    if (isFavorite) {
        addToFavoritesBtn.innerHTML = '<i class="fas fa-heart"></i> Remove from Favorites';
        addToFavoritesBtn.classList.add('btn-accent');
    } else {
        addToFavoritesBtn.innerHTML = '<i class="far fa-heart"></i> Add to Favorites';
        addToFavoritesBtn.classList.remove('btn-accent');
    }
    
    // Add event listener to favorites button
    addToFavoritesBtn.onclick = function() {
        toggleFavorite(exhibitId);
        openExhibitModal(exhibitId); // Reopen modal to update button
    };
    
    // Show modal
    modal.classList.add('active');
}

function openArtistModal(artistId) {
    const artist = artistsData.find(a => a.id === artistId);
    const modal = document.getElementById('artistModal');
    
    if (!artist) return;
    
    // Populate modal with artist data
    document.getElementById('modalArtistName').textContent = artist.name;
    document.getElementById('modalArtistEra').textContent = `${artist.era} • ${artist.style}`;
    document.getElementById('modalArtistBio').textContent = artist.bio;
    document.getElementById('modalArtistImage').src = artist.image;
    document.getElementById('modalArtistImage').alt = artist.name;
    
    // Populate achievements
    const achievementsList = document.getElementById('modalArtistAchievements');
    achievementsList.innerHTML = '';
    
    const achievements = [
        'Featured in over 50 international exhibitions',
        'Awarded the National Art Prize in 2010',
        'Works displayed in major museums worldwide',
        'Recognized as a master of their artistic style'
    ];
    
    achievements.forEach(achievement => {
        const li = document.createElement('li');
        li.textContent = achievement;
        achievementsList.appendChild(li);
    });
    
    // Populate notable works
    const worksContainer = document.getElementById('modalArtistWorks');
    worksContainer.innerHTML = '';
    
    artist.works.forEach(work => {
        const workElement = document.createElement('div');
        workElement.style.marginBottom = '10px';
        workElement.innerHTML = `
            <div style="display: flex; align-items: center;">
                <div style="width: 10px; height: 10px; background-color: var(--secondary-color); border-radius: 50%; margin-right: 10px;"></div>
                <span>${work}</span>
            </div>
        `;
        worksContainer.appendChild(workElement);
    });
    
    // Show modal
    modal.classList.add('active');
}

// 11. Favorites Functions
function initFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    const clearFavoritesBtn = document.getElementById('clearFavorites');
    
    // Load favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // Render favorites
    function renderFavorites() {
        favoritesGrid.innerHTML = '';
        
        if (favorites.length === 0) {
            favoritesGrid.innerHTML = '<div style="text-align: center; width: 100%; color: #666;">No favorites yet. Add some exhibits to your favorites!</div>';
            return;
        }
        
        favorites.forEach(exhibitId => {
            const exhibit = exhibitsData.find(e => e.id === exhibitId);
            if (!exhibit) return;
            
            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.setAttribute('data-id', exhibit.id);
            favoriteItem.setAttribute('draggable', 'true');
            favoriteItem.innerHTML = `
                <h4>${exhibit.title}</h4>
                <p>${exhibit.artist}</p>
                <p><small>${exhibit.year} • ${exhibit.era}</small></p>
                <button class="remove-favorite" data-id="${exhibit.id}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            favoritesGrid.appendChild(favoriteItem);
        });
        
        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-favorite').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const exhibitId = parseInt(this.getAttribute('data-id'));
                removeFromFavorites(exhibitId);
            });
        });
        
        // Initialize drag and drop
        initDragAndDrop();
    }
    
    // Add to favorites
    function addToFavorites(exhibitId) {
        if (!favorites.includes(exhibitId)) {
            favorites.push(exhibitId);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            renderFavorites();
            updateDashboard();
            
            // Show notification
            showNotification('Exhibit added to favorites!');
        }
    }
    
    // Remove from favorites
    function removeFromFavorites(exhibitId) {
        favorites = favorites.filter(id => id !== exhibitId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
        updateDashboard();
        
        // Show notification
        showNotification('Exhibit removed from favorites.');
    }
    
    // Toggle favorite
    function toggleFavorite(exhibitId) {
        if (favorites.includes(exhibitId)) {
            removeFromFavorites(exhibitId);
        } else {
            addToFavorites(exhibitId);
        }
    }
    
    // Clear all favorites
    clearFavoritesBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all favorites?')) {
            favorites = [];
            localStorage.removeItem('favorites');
            renderFavorites();
            updateDashboard();
            
            // Show notification
            showNotification('All favorites cleared.');
        }
    });
    
    // Drag and drop functionality
    function initDragAndDrop() {
        const favoriteItems = document.querySelectorAll('.favorite-item');
        let draggedItem = null;
        
        favoriteItems.forEach(item => {
            item.addEventListener('dragstart', function() {
                draggedItem = this;
                setTimeout(() => {
                    this.style.opacity = '0.5';
                }, 0);
            });
            
            item.addEventListener('dragend', function() {
                setTimeout(() => {
                    draggedItem.style.opacity = '1';
                    draggedItem = null;
                }, 0);
                
                // Save new order to localStorage
                const newOrder = [];
                document.querySelectorAll('.favorite-item').forEach(item => {
                    newOrder.push(parseInt(item.getAttribute('data-id')));
                });
                
                favorites = newOrder;
                localStorage.setItem('favorites', JSON.stringify(favorites));
            });
            
            item.addEventListener('dragover', function(e) {
                e.preventDefault();
            });
            
            item.addEventListener('dragenter', function(e) {
                e.preventDefault();
                this.style.backgroundColor = 'rgba(52, 152, 219, 0.2)';
            });
            
            item.addEventListener('dragleave', function() {
                this.style.backgroundColor = '';
            });
            
            item.addEventListener('drop', function() {
                this.style.backgroundColor = '';
                if (draggedItem && draggedItem !== this) {
                    const allItems = [...document.querySelectorAll('.favorite-item')];
                    const draggedIndex = allItems.indexOf(draggedItem);
                    const targetIndex = allItems.indexOf(this);
                    
                    if (draggedIndex < targetIndex) {
                        this.parentNode.insertBefore(draggedItem, this.nextSibling);
                    } else {
                        this.parentNode.insertBefore(draggedItem, this);
                    }
                }
            });
        });
    }
    
    // Initial render
    renderFavorites();
}

// 12. Dashboard Functions
function initDashboard() {
    updateDashboard();
    
    // Update dashboard every 5 seconds for demo purposes
    setInterval(updateDashboard, 5000);
}

function updateDashboard() {
    // Update today's views (mock data)
    const todayViews = Math.floor(Math.random() * 50) + 20;
    document.getElementById('todayViews').textContent = todayViews;
    document.getElementById('todayViewsProgress').style.width = `${Math.min(todayViews / 50 * 100, 100)}%`;
    
    // Update favorites count
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    document.getElementById('favoritesCount').textContent = favorites.length;
    document.getElementById('favoritesProgress').style.width = `${Math.min(favorites.length / 10 * 100, 100)}%`;
    
    // Update weekly visitors (mock data)
    const weeklyVisitors = Math.floor(Math.random() * 500) + 1000;
    document.getElementById('weeklyVisitors').textContent = weeklyVisitors.toLocaleString();
}

// 13. Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility function to show notifications
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: var(--secondary-color);
        color: white;
        padding: 15px 20px;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 2000;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the view details button on the featured artwork
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.view-details-btn').addEventListener('click', function() {
        openExhibitModal(1); // Open Starry Night details
    });
});