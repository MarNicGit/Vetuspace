import { VetusWindow } from "./vetusWindow";

export class WindowContainer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.registerListeners();
        this.id = 'window-container';
        this.render();
    }

    registerListeners(){
        
    }

    render(){
        let container = document.createElement('div');
        
        this.innerHTML = container.innerHTML;
    }

    static Get():HTMLElement{
        return document.getElementById('window-container');
    }

    static AttachWindow(window:VetusWindow){
        this.Get().appendChild(window);
    }
}