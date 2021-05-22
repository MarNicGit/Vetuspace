import { desktopUnselectEvent } from "../events";

export class VetuOSWindowElement extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback(){
        this.classList.add('window');
        this.dispatchEvent(desktopUnselectEvent);
    }
}