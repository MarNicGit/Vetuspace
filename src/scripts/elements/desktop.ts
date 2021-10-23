import { DesktopIcon } from "./desktopIcon";

export class Desktop extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.id = 'desktop';
        this.registerListeners();
    }

    registerListeners(){
        this.addEventListener('click', this.onClick)
    }

    onClick(e: MouseEvent){
        e.stopPropagation();
        let icons = document.getElementsByTagName('desktop-icon');
        for (let index = 0; index < icons.length; index++) {
            const icon = icons[index] as DesktopIcon;
            icon.unselect();
        }
    }

    static Get():HTMLElement{
        return document.getElementById('desktop');
    }
}