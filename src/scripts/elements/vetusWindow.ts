import { Doc } from "../helpers/doc";

export class VetusWindow extends HTMLElement {
    windowTitle: string;
    constructor(windowTitle:string){
        super();
        this.windowTitle = windowTitle;
        this.setAttribute("type", windowTitle);        
    }

    connectedCallback(){
        this.render();
        this.registerListeners();
    }

    registerListeners(){
        
    }

    render(){
        let titlebar = Doc.createElement('div','titlebar');
        let windowLabel = Doc.createElement('label')
        windowLabel.textContent = this.windowTitle;
        titlebar.append(windowLabel);
        let buttonContainer = Doc.createElement('div','btnContainer');

        let closeBtn = Doc.createElement('button', 'closeBtn');
        closeBtn.textContent = 'x';

        closeBtn.addEventListener('click', ()=>this.closeWindow())

        buttonContainer.appendChild(closeBtn);
        titlebar.append(buttonContainer);

        this.append(titlebar);
    }

    closeWindow() {
        this.remove();
    }
}
