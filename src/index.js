const homePage = "http://127.0.0.1:3000"
const Collections_URL = `${homePage}/api/v1/collections`
const Card_URL = `${homePage}/api/v1/card`

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is Loaded!");
    getCollection()

    
    const createCollectionForm = document.querySelector("#create-collection-form")
    createCollectionForm.addEventListener("submit", (e) => createCollectionFormhandler(e))
})

function getCollection() {
    fetch(Collections_URL)
    .then(response => response.json())
    .then(collection => {
        collection.data.forEach(collection => {
            let newCollection = new Collection(collection, collection.attributes)
           document.querySelector("#collection-container").innerHTML += newCollection.createCollection();
        })
    })
}

function createCollectionFormhandler(e) {
    e.preventDefault()
    const collectionTitle = document.querySelector("#collectionTitle").value 
    postFetch(collectionTitle)
}

function postFetch(title) {
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
    })
}

//const createCollection = (collectionTitle) => {
//    const div = document.createElement("div")
//    const p = document.createElement("p")
//    const button = document.createElement("button")
//    const ul = document.createElement("ul")
//
//    div.setAttribute("class", "card")
//    div.setAttribute("data-id", collectionTitle.id)
//    p.innerHTML = collectionTitle.title
//    button.setAttribute("data-collection-id", collectionInfo.id)
//    button.innerHTML = "Add Card"
//    button.addEventListener("click", addCard)
//
//    div.appendChild(p)
//    div.appendChild(button)
//    div.appendChild(ul)
//
//    main.appendChild(div)
//    collectionTitle.cards.forEach(card => createCard(card))
//}

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

