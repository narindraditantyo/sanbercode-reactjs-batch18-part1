// soal 1
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

var time = 10000
var i = 0

// callback hell
readBooks(time, books[i], function(callbackBooks) {
    i += 1
    readBooks(callbackBooks, books[i], function(callbackBooks2) {
        i += 1
        readBooks(callbackBooks2, books[i], function(callbackBooks3) {
            i += 1
            readBooks(callbackBooks3, books[i], function(callbackBooks4) {})
        })
    })
})