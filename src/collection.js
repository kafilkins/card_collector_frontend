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

            divCollection.className = 'collection-body' 
            divCollection.setAttribute("data-collection-id", this.id)
            pCollection.innerHTML = `${this.title}`
            buttonCollection.className = "collection-release"
            buttonCollection.setAttribute("data-card-id", this.id)
            buttonCollection.addEventListener("click", deleteCollection)
            buttonCollection.innerHTML = "Delete"
            labelNewCard.value = "New Card"
            divCard.className = "card-form-group"
            formCard.setAttribute = "create-card-form-${this.id}"
            labelNewCard.innerHTML = `<h3 class="card-title">New Card</h3>`
            labelPlayer.setAttribute = "player"
            labelPlayer.value = "Player"
            inputPlayer.setAttribute = "Player"
            labelDescription.setAttribute = "description"
            labelDescription.value = "Description"
            inputDescription.attribute = "description"
            buttonCard.attribute = "btn btn-primary"
            buttonCard.value = "Create"

            divCollection.appendChild(pCollection)
            divCollection.appendChild(buttonCollection)

            main.appendChild(divCollection)

            //return`
            //<div class="collection-body" data-collection-id=${this.id}>
            //    <p>${this.title}</p>
            //    <button class="collection-release" data-card-id=${this.id}>Delete</button>
            //        <div class="card-form-group">
            //            <form id="create-card-form-${this.id}">
            //                <label><h3 class="card-title">New Card</h3></label>
            //                <label for="player">Player:</label>
            //                <input type="player" class="card-player" id="cardPlayer"><br>
            //                <label for="description">Description:</label>
            //                <input type="description" class="card-description" id="cardDescription"><br>
            //                <button type="submit" class="btn btn-primary">Create</button>
            //            </form>
            //        </div>
            //    <ul>
            //        <li>
            //    
            //        </li>
            //    </ul>
            //</div>`
        }    
}

Collection.all = [];