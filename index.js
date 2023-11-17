var customerName = 'bob';

function myFunc() {
    console.log(customerName)
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()

}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCusomter = 'Adrian'
function changeLeastFavoriteCustomer() {
    leastFavoriteCusomter = 'Daniel'
}