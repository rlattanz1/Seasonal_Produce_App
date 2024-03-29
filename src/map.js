
class CountryMap{

    constructor(container, season, prodBtn) {
        this.season = season;
        this.container = container;
        this.prodBtn = prodBtn;
        this.container.addEventListener("mouseover", this.handleMousover.bind(this));
        this.container.addEventListener("click", this.handleClick.bind(this));
        this.prodBtn.addEventListener("click", this.closeProds.bind(this));
    };

    handleMousover(e) {
        let stateName = document.getElementById('state-name');
        let stateEl = e.target.tagName;
        if (stateEl === 'path') {
            let content = `${e.target.dataset.name}`;
            stateName.innerText = content;
        } else {
            let content = '';
            stateName.innerText = content;
        }
    }

    handleClick(e) {
        e.preventDefault();
        let stateId = e.target.id;
        let seasonEl = this.season.filteredItems;
        let stateEl = seasonEl[stateId];


        if (!stateEl) {
            alert("Please select a season and a valid state");
        } else {
            let menu = document.getElementById("items-list");
            menu.innerText = '';
            const itemContainer = document.getElementById("items");
            const elements = Object.keys(stateEl);
            elements.forEach(key => {
                let listEl = document.createElement("li");
                let imgEl = document.createElement("img");
                let product_desc = document.createElement("p")
                imgEl.src = stateEl[key][0];
                imgEl.classList.add('item-img')
                product_desc.classList.add('item-desc')
                product_desc.append(`${stateEl[key][1]}`);
                listEl.append(imgEl)
                listEl.append(product_desc);
                menu.append(listEl)
            })
            if (itemContainer.style.display === 'flex') {
                itemContainer.style.display = 'none';
                this.prodBtn.style.display = 'none';
            } else {
                itemContainer.style.display = 'flex';
                this.prodBtn.style.display = 'flex';
            };
            return this.itemContainer;
        }
    };

    closeProds(e) {
        e.preventDefault();
        const itemContainer = document.getElementById("items");
        if (e.target.id === "prod-button") {
            itemContainer.style.display = 'none';
            this.prodBtn.style.display = 'none';
        }
    };
};

export default CountryMap;
