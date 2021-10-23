import { Doc } from "../helpers/doc";

export class VetusWindow extends HTMLElement {
    windowTitle: string;
    constructor(windowTitle:string){
        super();
        this.windowTitle = windowTitle;
        this.setAttribute("type", windowTitle);        
    }

    connectedCallback(){
        this.registerListeners();
        this.render();
    }

    registerListeners(){
        
    }

    render(){
        let titlebar = Doc.createElement('div','titlebar');

        titlebar.textContent = this.windowTitle;
        this.append(titlebar);
    }
}