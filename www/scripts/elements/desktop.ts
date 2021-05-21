import { desktopUnselectEvent } from "../events";

export class Desktop extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.id = Desktop.name;
        this.registerListeners();
    }

    registerListeners(){
        this.addEventListener('click', this.onClick)
    }

    onClick(e: MouseEvent){
        this.dispatchEvent(desktopUnselectEvent);
    }
}