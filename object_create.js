// Object of Protos
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
};

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book 1';
// book1.author = 'John Doe';
// book1.year = '2015';

const book1 = Object.create(bookProtos, {
  title: { value: 'Book 1' },
  author: { value: 'John Doe' },
  year: { value: '2016' }
});

console.log(book1);
