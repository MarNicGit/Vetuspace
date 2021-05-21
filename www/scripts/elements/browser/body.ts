export class BrowserBody extends HTMLElement{
    static elementName = 'bunscape-body';
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