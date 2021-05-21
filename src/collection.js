class Collection {
    constructor(collection, collectionAttributes) {
        this.id = collection.id 
        this.title = collectionAttributes.title
        Collection.all.push(this)
        console.log(this);
    }
        createCollection () {
            const divCollection = document.createElement('div')
            const pCollection = document.createElement('p')
            const buttonCollection = document.createElement('button')
            const divCard = document.createElement('div')
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
            formCard.id = "create-card-form" 
            labelNewCard.innerHTML = `<h3 class="card-title">New Card</h3>`
            labelPlayer.innerHTML = "Player: "
            inputPlayer.type = "player"
            inputPlayer.id = "cardPlayer"
            inputPlayer.className = "cardPlayer"
            labelDescription.innerHTML = "Description: "
            inputDescription.type = "description"
            inputDescription.id = "cardDescription"
            inputDescription.className = "cardDescription"
            buttonCard.type = "submit"
            buttonCard.className = "btn btn-primary"
            buttonCard.innerHTML = "Create"

            divCollection.appendChild(buttonCollection)
            divCollection.appendChild(pCollection)
            divCollection.appendChild(divCard)
            divCard.appendChild(formCard)
            formCard.appendChild(labelNewCard)
            //divCard.appendChild(labelNewCard)
            formCard.appendChild(labelPlayer)
            //divCard.appendChild(labelPlayer)
            formCard.appendChild(inputPlayer)
            //divCard.appendChild(inputPlayer)
            formCard.appendChild(lineBreak)
            //divCard.appendChild(lineBreak)
            formCard.appendChild(labelDescription)
            //divCard.appendChild(labelDescription)
            formCard.appendChild(inputDescription)
            //divCard.appendChild(inputDescription)
            formCard.appendChild(lineBreak2)
            //divCard.appendChild(lineBreak2)
            formCard.appendChild(buttonCard)
            //divCard.appendChild(buttonCard)

            main.appendChild(divCollection)
        }
}

Collection.all = [];