// Book class definition
class Book {
    constructor(title, author, year, genre) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    // Method to return the book's information as a string
    getInfo() {
        return `${this.title} by ${this.author}, published in ${this.year} - Genre: ${this.genre}`;
    }
}

// Factory function to create new Book objects
function createBook(title, author, year, genre) {
    return new Book(title, author, year, genre);
}

// Library class definition
class Library {
    constructor() {
        this.books = [];
    }

    // Method to add books to the collection
    addBook(book) {
        this.books.push(book);
    }

    // Method to filter books published after a given year
    filterBooksByYear(year) {
        return this.books.filter(book => book.year > year);
    }

    // Method to return an array of all book titles
    getAllBookTitles() {
        return this.books.map(book => book.title);
    }

    // Method to calculate the total number of books
    getTotalBooks() {
        return this.books.reduce((total, book) => total + 1, 0);
    }

    // Method to calculate the average publication year of all books
    getAveragePublicationYear() {
        if (this.books.length === 0) return 0;
        const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
        return totalYears / this.books.length;
    }
}

// Example usage

// Create a new library
const myLibrary = new Library();

// Create some book objects using the factory function
const book1 = createBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Novel');
const book2 = createBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Novel');
const book3 = createBook('1984', 'George Orwell', 1949, 'Dystopian');
const book4 = createBook('The Hobbit', 'J.R.R. Tolkien', 1937, 'Fantasy');

// Add books to the library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

// Get information about each book
console.log(book1.getInfo()); // The Great Gatsby by F. Scott Fitzgerald, published in 1925 - Genre: Novel
console.log(book2.getInfo()); // To Kill a Mockingbird by Harper Lee, published in 1960 - Genre: Novel

// Filter books published after 1950
const booksAfter1950 = myLibrary.filterBooksByYear(1950);
console.log(booksAfter1950.map(book => book.getInfo())); // ['To Kill a Mockingbird by Harper Lee, published in 1960 - Genre: Novel']

// Get all book titles
const allTitles = myLibrary.getAllBookTitles();
console.log(allTitles); // ['The Great Gatsby', 'To Kill a Mockingbird', '1984', 'The Hobbit']

// Get the total number of books in the library
const totalBooks = myLibrary.getTotalBooks();
console.log(totalBooks); // 4

// Get the average publication year of all books
const averageYear = myLibrary.getAveragePublicationYear();
console.log(averageYear); // 1942.75
