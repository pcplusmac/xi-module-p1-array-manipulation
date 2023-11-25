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

// TODO: Find the first object whose condition returns true based on a callback
/**without find() */

function loopThroughDynamic(array,finder) {
    let result = null
    for (const item of array) {
        if (finder(item) === true) {
            result = item.name
            // the requirement is to find the first matching item, so we need to stop the loop
            // break
            // another way to stop the loop is use 'return'
            return
        }
    }
    return result
}

function isBook(array) {
    for (const item of array){
        // console.log( item.inventory <15)
        console.log(typeof(item.inventory <15))
        break
    }
    
}
/**with find() */