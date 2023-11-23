// Practicse whhat  learnt from map videos. 
let books = [
    {
        title: 'book1',
        price: 16.00,
        inventory: 5
    },
    {
        title: 'book2',
        price: 13.30,
        inventory: 15
    },
    {
        title: 'book3',
        price: 9.00,
        inventory: 6
    },
    {
        title: 'book4',
        price: 26.00,
        inventory: 36
    },
    {
        title: 'book5',
        price: 11.00,
        inventory: 25
    },
    {
        title: 'book6',
        price: 96.00,
        inventory: 3
    },
    {
        title: 'book7',
        price: 6.50,
        inventory: 85
    }] 
// TODO:    Return an array of titles

/**Way1: without using map() */
function loopThrough(array) {
    let titles = []
    for (const item of array) {
        titles.push(item.title)
    }
    return titles
}

function loopThroughDynamic(array,updaterFunc) {
    let titles = []
    for (const item of array) {
        titles.push(updaterFunc(item))
    }
    return titles
}
function priceCall(obj){
    return obj.price
}
/**Way2: with map() */
let bookTitles = books.map(item => item.title)
console.log (bookTitles)

//TODO:  create a new array for the modified version of the original array(keep the original array unchanged)
/**Way1: without using map() */

/**Way2: with map() */