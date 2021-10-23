//This file loads all of our custom elements

import { Desktop } from "../elements/desktop";
import { DesktopIcon } from "../elements/desktopIcon";
import { VetusWindow } from "../elements/vetusWindow";
import { WindowContainer } from "../elements/windowContainer";

const classes : any = {
    'desktop-base': Desktop,
    'desktop-icon': DesktopIcon,
    'vetus-window': VetusWindow,
    'window-container' : WindowContainer
}

export class ElementManager {
    constructor() {
        Object.keys(classes).forEach(element => {
            customElements.define(element, classes[element]);
            console.info(`Registered element ${element}.`)
        });
    }

    static GetElement(elementName:string){
        return classes[elementName] ? new classes[elementName] : null;
    }
}

