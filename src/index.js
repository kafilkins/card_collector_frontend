const homePage = "http://127.0.0.1:3000"
const Collections_URL = `${homePage}/api/v1/collections`
const Cards_URL = `${homePage}/api/v1/cards`
const main = document.querySelector("main")

document.addEventListener('DOMContentLoaded', () => getCollection())
    
const createCollectionForm = document.querySelector("#create-collection-form")
createCollectionForm.addEventListener("submit", (e) => createCollectionFormhandler(e))

function getCollection() {
    fetch(Collections_URL)
    .then(response => response.json())
    .then(collection => {
        collection.data.forEach(collection => {
            let newCollection = new Collection(collection, collection.attributes)
           main.append(newCollection.createCollection());

           //const createCardForm = document.querySelector(`#create-card-form-${newCollection.id}`)
            //createCardForm.addEventListener("submit", (e) => createCardFormhandler(e))
        })
    })
}

function createCollectionFormhandler(e) {
    e.preventDefault()
    const collectionTitle = document.querySelector("#collectionTitle").value 
    collectionFetch(collectionTitle)
}

function createCardFormhandler(e) {
    e.preventDefault()
    const cardPlayer = document.querySelector("#cardPlayer").value 
    const cardDescription = document.querySelector("#cardDescription").value 
    cardFetch(cardPlayer, cardDescription)
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
        let newCollection = new Collection(collectionData, collectionData.attributes)
        document.querySelector("main").innerHTML += newCollection.createCollection();

        const createCardForm = document.querySelector(`#create-card-form-${newCollection.id}`)
        createCardForm.addEventListener("submit", (e) => createCardFormhandler(e))

    })
}

function cardFetch(player, description) {
    const bodyData = {player, description}
    fetch(Cards_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(card => {
        console.log(card);
    })
}

const createCard = (card) => {
    const ul = document.querySelector(`div[data-id="${card.collection_id}"]`)
    const li = document.createElement("li")
    const button = document.createElement("button")

    li.innerHTML = `${card.player}`
    button.setAttribute("class", "release")
    button.setAttribute("data-card-id", card.id)
    button.innerHTML = "Release"
    button.addEventListener("click", deleteCard)

    li.appendChild(button)
    ul.appendChild(li)
}

const addCard = (e) => {
    e.preventDefault()
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({collection_id: e.target.dataset.collectionId})
    }
    fetch(Card_URL, configObj)
    .then(res => res.json())
    .then(json => {
        createCard(json)
    }) 
}

const deleteCard = (e) => {
    e.preventDefault()

    const configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
        fetch(`${Card_URL}/${e.target.dataset.cardId}`, configObj)
        e.target.parentElement.remove()
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

