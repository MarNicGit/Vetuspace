import { desktopUnselect } from "../events";

export class Desktop extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.registerListeners();
    }

    registerListeners(){
        this.addEventListener('click', this.onClick)
    }

    onClick(e: MouseEvent){
        this.dispatchEvent(desktopUnselect);
    }
}