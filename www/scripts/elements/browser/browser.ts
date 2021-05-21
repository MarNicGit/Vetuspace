import { VetuOSWindowElement } from "../window";
import { BrowserAddressbar } from "./addressbar";
import { BrowserBody } from "./body";

export class Browser extends VetuOSWindowElement {
    static elementName = 'bunscape-browser';
    constructor(){
        super();
    }

    connectedCallback(){
        this.registerListeners();
        this.render();
    }

    registerListeners(){

    }

    render(){
        let addressbar = document.createElement(BrowserAddressbar.name);
        let body = document.createElement(BrowserBody.name);

        this.appendChild(addressbar);
        this.appendChild(body);
    }
}