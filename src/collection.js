class Collection {
    constructor(collection, collectionAttributes) {
        this.id = collection.id 
        this.title = collectionAttributes.title
        Collection.all.push(this)
        console.log(this);
    }
    createCollection () {
        return `
        <div class="collection-body" data-collection-id=${this.id}>
            <p>${this.title}</p>
            <button class="collection-release" data-card-id=${this.id}>Delete</button>
            <button data-collection-id=${this.id}>Add Card</button>
            <ul></ul>
            <li>
                
            </li>
        </div>`
    }
    deleteCollection = (e) => {
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
    
}

Collection.all = [];