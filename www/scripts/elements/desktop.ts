import { desktopUnselectEvent } from "../events";

export class Desktop extends HTMLElement {
    static elementName = 'desktop-base';
    constructor(){
        super();
    }

    connectedCallback(){
        if(document.getElementById(Desktop.name)){
            throw new Error("There cannot be more than one desktop!");
        }
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