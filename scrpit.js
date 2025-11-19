document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const bookGrid = document.querySelector('.book-grid');

    // --- 1. Mock Data for Books ---
    const libraryBooks = [
        { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', status: 'Available', isbn: '978-0743273565', cover: 'book_cover_gatsby.jpg' },
        { title: '1984', author: 'George Orwell', status: 'Checked Out', isbn: '978-0451524935', cover: 'book_cover_1984.jpg' },
        { title: 'To Kill a Mockingbird', author: 'Harper Lee', status: 'Available', isbn: '978-0061120084', cover: 'book_cover_mockingbird.jpg' },
        { title: 'Dune', author: 'Frank Herbert', status: 'Available', isbn: '978-0441172719', cover: 'book_cover_dune.jpg' },
    ];

    // --- 2. Function to Render Book Cards ---
    function renderBooks(books) {
        bookGrid.innerHTML = ''; // Clear previous results

        if (books.length === 0) {
            bookGrid.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">No books found matching your search.</p>';
            return;
        }

        books.forEach(book => {
            const card = document.createElement('article');
            card.className = 'book-card';
            card.setAttribute('data-isbn', book.isbn);
            
            const statusClass = book.status === 'Available' ? 'available' : 'checked-out';
            const buttonText = book.status === 'Available' ? 'Reserve' : 'Queue';

            // HTML structure for the book card
            card.innerHTML = `
                <img src="${book.cover}" alt="${book.title} Cover" class="book-cover">
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p class="book-author">By ${book.author}</p>
                    <span class="book-status ${statusClass}">${book.status}</span>
                    <button class="reserve-btn" data-isbn="${book.isbn}">
                        <i class="fas fa-bookmark"></i> ${buttonText}
                    </button>
                </div>
            `;
            bookGrid.appendChild(card);
        });
    }

    // --- 3. Search Functionality (Simulated) ---
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        // Filter the mock data based on the query
        const filteredBooks = libraryBooks.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );

        renderBooks(filteredBooks);
    }

    // Event listeners
    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Initial load: show all books
    renderBooks(libraryBooks);
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Project Carousel Scrolling
    const carousel = document.getElementById('works-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (carousel && prevBtn && nextBtn) {
        // Scroll width calculation: width of one card + gap (30px)
        const scrollAmount = 380; 

        nextBtn.addEventListener('click', () => {
            carousel.scrollLeft += scrollAmount;
        });

        prevBtn.addEventListener('click', () => {
            carousel.scrollLeft -= scrollAmount;
        });
    }

    // 2. Mobile Menu Toggle (from previous response, keeping it here for completeness)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});

