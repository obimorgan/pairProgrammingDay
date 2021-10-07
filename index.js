// // <!-- Ex 12) Create a method that counts the number of "travels" on the page -->


const countDestinations = function() {
    let destinations = document.querySelectorAll(".card-img-top")
    let count = destinations.length
    alert(`We have ${count} destinations waiting for  you!`)
}
countDestinations()

// <!-- Ex 15) Create a function that adds a "HOT" badge to all the "Welcome Summer" offers -->

const addBadges = function () {
    let welcomeSummerOffers = document.querySelectorAll("#card-body")
    
    for (let i = 0; i < welcomeSummerOffers.length; i++) {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = `<a href="#" class="badge badge-danger">hot</a>`
        welcomeSummerOffers[i].appendChild(newDiv)
    }
}
addBadges()

// <!-- Ex 16) Create a function to delete all "cards" from the page -->

const allCards = document.querySelectorAll('.card')
const deleteCards = function() { 
    for (let i = 0; i<allCards.length; i++) {
        allCards[i].remove()
    }


}
// deleteCards()



