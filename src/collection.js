const main = document.querySelector("main")

class Collection {
    constructor(collection, collectionAttributes) {
        this.id = collection.id 
        this.title = collectionAttributes.title
        Collection.all.push(this)
        console.log(this);
    }
    createCollection () {
        return `
        <div class="collection-body">
            <h5 class="collection-title">${this.title}</h5>
        </div>`

        //const div = document.createElement("div")
        //const p = document.createElement("p")
        //const button = document.createElement("button")
        //const ul = document.createElement("ul")
    //
        //div.setAttribute("class", "card")
        //div.setAttribute("data-id", this.id)
        //p.innerHTML = this.title
        //button.setAttribute("data-collection-id", this.id)
        //button.innerHTML = "Add Card"
        //button.addEventListener("click", addCard)
    //
        //div.appendChild(p)
        //div.appendChild(button)
        //div.appendChild(ul)
    //
        //main.append.Child(div)
        //this.cards.forEach(card => createCard(card))
    }
    
}

Collection.all = [];