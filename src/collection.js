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
                    <form id="create-card-form-${this.id}">
                        <div class="card-form-group">
                        <label><h3 class="site-title">New Card</h3></label>
                        <label for="player">Player:</label>
                        <input type="player" class="card-player" id="cardPlayer"><br>
                        <label for="description">Description:</label>
                        <input type="description" class="card-description" id="cardDescription">
                        </div>
                        <button type="submit" class="btn btn-primary">Create</button>
                    </form>
                <ul>
                    <li>
                
                    </li>
                </ul>
            </div>`
        }    
}

Collection.all = [];