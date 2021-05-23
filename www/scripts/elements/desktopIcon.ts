import { desktopUnselectEvent } from "../events";
import { StateController } from "../stateController";
import { Browser } from "./browser/browser";
import { VetuOSWindowElement } from "./window";

export class DesktopIcon extends HTMLElement {
    static elementName = 'desktop-icon';
    constructor(){
        super();
    }

    connectedCallback(){
        console.log('element added!');
        this.registerListeners();
        this.render();
    }

    registerListeners(){
        this.addEventListener('dblclick', this.onDoubleClick)
        this.addEventListener('click', this.onClick)
        document.addEventListener(desktopUnselectEvent.type, ()=>{this.unselect()})
    }

    onClick(e: MouseEvent){
        e.stopPropagation();
        this.select()
    }

    onDoubleClick(e: MouseEvent){
        let windowElement = document.createElement(Browser.elementName) as VetuOSWindowElement;
        StateController.instance.spawnWindow(windowElement);
    }

    select(){
        this.classList.add('selected');
    }

    unselect(){
        this.classList.remove('selected');
    }

    render(){
        let title = this.getAttribute('title');
        let iconUrl = this.getAttribute('icon');

        let icon = document.createElement('img' )
        icon.src = iconUrl;

        let iconWrapper = document.createElement('div');
        iconWrapper.className = "wrapper";
        iconWrapper.appendChild(icon);

        let label = document.createElement('label');
        label.innerText = title;

        this.appendChild(iconWrapper);
        this.appendChild(label);
    }
}