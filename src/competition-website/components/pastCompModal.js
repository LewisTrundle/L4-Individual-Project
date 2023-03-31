import {pastComp} from './text.js';


class pastCompModal extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="w3-display-middle past-comp-modal">
                <div class="content">
                    <h3 class="modal-title">${pastComp.title}</h3>
                    <hr class="w3-border-grey divider" style="margin:auto;width:40%">
                    <p class="w3-large w3-center description">${pastComp.description}</p>
                    <a class="btn btn-primary" href="uofg_ucp_23.html" role="button">${pastComp.button}</a>
                </div>
            </div>
`
    }
}

customElements.define('past-comp-modal', pastCompModal);