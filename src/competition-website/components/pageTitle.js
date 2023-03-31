class PageTitle extends HTMLElement {
    connectedCallback() {
        var title = this.attributes.title.value;
        this.innerHTML = `
        <h1 class="w3-jumbo w3-animate-top title">${title}</h1>
`
    }
}

customElements.define('page-title', PageTitle);