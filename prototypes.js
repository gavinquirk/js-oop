// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  // Methods
  // getSummary could go here
}

// getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate Object
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1925');
const book2 = new Book('The Lord of the Rings', 'J. R. R. Tolkien', '1937');

console.log(book2);
book2.revise('2018');
console.log(book2);
