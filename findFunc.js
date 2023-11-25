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
            result = item
           break 
            // return
        }
    }
    return result
}

function inventoryStockFirst(arr) {
    return arr.inventory < 15
    /**the code here of demo is on 'keep' demo--canvas */
}
/**with find() */