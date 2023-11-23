
let num =[1,2,3,4,5]
num.push(6)


function loopThrough  (array)  {
    for (let item of array) {
        console.log(item)
    }
}

const capitalizer = (array) => {
    let newArray = []
    for (let item of array) {
        newArray.push(item.toUpperCase())
    }
    console.log(newArray)
    console.log(array)
}
function handleArray(func) {
    
    let people = ["Ali","Alice","Anthony","Alan"]
    func(people)
}


handleArray(loopThrough)
handleArray(capitalizer)


/** Below is for first class function the video 2  */
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

function printReport(func) {
    console.log(func(books))
}

function sumInventory (array) {
    let total = 0
    for (let item of array) {
        total+=item.inventory

    }
    return `the sum of total current inventory is: ${total}`
}

function replenish(array) {
    let replenishList = []
    for (item of array) {
        if(item.inventory < 20 ) {
            replenishList.push(item.title)
        }
    }
    console.log(replenishList)
    return `the items need to stock-in is: ${replenishList.join(' -- ')}`
    return `the items need to stock-in is: ${replenishList}`
}

function getHighestItem(array) {
    let highPrice = 0
    let title = " "
    for (const item of array) {
        if (highPrice < item.price) {
            highPrice = item.price
            title = item.title
            
        }
    }
    return `The hight price is: ${highPrice} of ${title}`
}
// printReport(sumInventory)
// printReport(replenish)
printReport(getHighestItem)