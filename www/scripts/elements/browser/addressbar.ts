export class BrowserAddressbar extends HTMLElement{
    static elementName = 'bunscape-addressbar';
    constructor() {
        super();
    }

    connectedCallback(){
        this.registerListeners();
        this.render();
    }

    registerListeners() {
    }
    render() {

    }
}