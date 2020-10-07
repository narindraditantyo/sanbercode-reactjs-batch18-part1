// soal 2
var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

var time = 10000
var i = 0

// promise
const readBooks = (time) => {
    if(books[i]) {
        readBooksPromise(time, books[i])
            .then((result) => {
                time = result
                i += 1
                readBooks(time)
            })
            .catch((err) => {
                console.log(err)
            })
    } else {
        console.log("End")
    }
}

readBooks(time);