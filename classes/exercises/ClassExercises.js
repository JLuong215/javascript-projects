// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate,isbn, numberOfPages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyrightDate = copyrightDate;
       this.isbn = isbn;
       this.numberOfPages = numberOfPages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
    checkedout(uses=1){
        this.checkedout += uses;
    }
}
// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded){
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded);
        dispose(currentYear)
            if (currentYear-this.copyrightDate > 5) {
                this.discarded = 'Yes';
            }
        }
    }


class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded){
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded);
        this.timesCheckedOut;
        if (this.timesCheckedOut > 100) {
            this.discarded = 'Yes';
       }
    }
}
// Declare the objects for exercises 2 and 3 here:

// Title	Pride and Prejudice
// Author	Jane Austen
// Copyright date	1813
// ISBN	1111111111111
// Number of pages	432
// Number of times the book has been checked out	32
// Whether the book has been discarded	No
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');
console.log(prideAndPrejudice);

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');
console.log(makingTheShip);
// Code exercises 4 & 5 here:

