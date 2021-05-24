const homePage = "http://127.0.0.1:3000"
const Collections_URL = `${homePage}/api/v1/collections`
const Cards_URL = `${homePage}/api/v1/cards`
const main = document.querySelector("main")

document.addEventListener('DOMContentLoaded', () => getCollection())

function getCollection() {
    fetch(Collections_URL)
    .then(response => response.json())
    .then(collection => {
        collection.data.forEach(collection => {
        let newCollection = new Collection(collection, collection.attributes)
         newCollection.createCollection();
         createCard(newCollection);
        })
    })
}
    
const createCollectionForm = document.querySelector("#create-collection-form")
createCollectionForm.addEventListener("submit", (e) => createCollectionFormhandler(e))

function createCollectionFormhandler(e) {
    e.preventDefault()
    const collectionTitle = document.querySelector("#collectionTitle").value 
    collectionFetch(collectionTitle)
}

function collectionFetch(title) {
    const bodyData = {title}
    fetch(Collections_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(collection => {
        console.log(collection);
        const collectionData = collection.data
        const collectionTitle = collection.data.attributes 
        let newCollection = new Collection(collectionData, collectionTitle)
         newCollection.createCollection();
         createCard(newCollection)
    })
}

const deleteCollection = (e) => {
    e.preventDefault()

    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    fetch(`${Collections_URL}/${e.target.dataset.collectionId}`, configObj)
    e.target.parentElement.remove()
}

function createCard(newCollection) {
const createCardForm = document.getElementById(`${newCollection.id}`)
createCardForm.addEventListener("submit", (e) => createCardFormhandler(e))
}

function createCardFormhandler(e) {
    e.preventDefault()
    const cardPlayer = document.querySelector(`input[playerName-id="${e.target.id}"]`).value
    const cardDescription = document.querySelector(`input[descriptionInfo-id="${e.target.id}"]`).value
    let id = e.target.id
    cardFetch(cardPlayer, cardDescription, id)
}

function cardFetch(player, description, id) {
    const bodyData = {player, description, id}
    fetch(Cards_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(card => {
        newCard(card);
    })
}

function newCard (card) {
    const cardList = document.querySelector(`ul[card-list-id="${card.collection_id}"]`)
    const cardLine = document.createElement("li")

    cardLine.innerHTML = `${card.player} - ${card.description}`

    cardList.appendChild(cardLine)
}

