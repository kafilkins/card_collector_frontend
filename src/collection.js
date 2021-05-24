class Collection {
    constructor(collection, collectionAttributes) {
        this.id = collection.id 
        this.title = collectionAttributes.title
        //Collection.all.push(this)
        console.log(this);
    }
        createCollection () {
            const divCollection = document.createElement('div')
            const pCollection = document.createElement('p')
            const buttonCollection = document.createElement('button')
            const divCard = document.createElement('div')
            const ulCard = document.createElement('ul')
            const formCard = document.createElement('form')
            const labelNewCard = document.createElement('label')
            const labelPlayer = document.createElement('label')
            const inputPlayer = document.createElement('input')
            const labelDescription = document.createElement('label')
            const inputDescription = document.createElement('input')
            const buttonCard = document.createElement('button')
            const lineBreak = document.createElement("br")
            const lineBreak2 = document.createElement("br")

            divCollection.className = 'collection-body' 
            divCollection.setAttribute("data-collection-id", this.id)
            pCollection.innerHTML = `${this.title}`
            buttonCollection.className = "collection-release"
            buttonCollection.setAttribute("data-collection-id", this.id)
            buttonCollection.addEventListener("click", deleteCollection)
            buttonCollection.innerHTML = "Delete"
            labelNewCard.value = "New Card"
            divCard.className = "card-form-group"
            divCard.setAttribute("data-card-id", this.id)
            ulCard.setAttribute("card-list-id", this.id)
            formCard.className = "create-card-form" 
            formCard.id = this.id 
            labelNewCard.innerHTML = `<h3 class="card-title">New Card</h3>`
            labelPlayer.innerHTML = "Player: "
            inputPlayer.type = "player"
            inputPlayer.setAttribute("playerName-id", this.id)
            inputPlayer.className = "cardPlayer"
            labelDescription.innerHTML = "Description: "
            inputDescription.type = "description"
            inputDescription.setAttribute("descriptionInfo-id", this.id)
            inputDescription.className = "cardDescription"
            buttonCard.type = "submit"
            buttonCard.className = "btn btn-primary"
            buttonCard.id = this.id
            buttonCard.innerHTML = "Create"

            divCollection.appendChild(buttonCollection)
            divCollection.appendChild(pCollection)
            divCollection.appendChild(divCard)
            divCard.appendChild(ulCard)
            divCard.appendChild(formCard)
            formCard.appendChild(labelNewCard)
            formCard.appendChild(labelPlayer)
            formCard.appendChild(inputPlayer)
            formCard.appendChild(lineBreak)
            formCard.appendChild(labelDescription)
            formCard.appendChild(inputDescription)
            formCard.appendChild(lineBreak2)
            formCard.appendChild(buttonCard)

            main.appendChild(divCollection)
        }
}

//Collection.all = [];