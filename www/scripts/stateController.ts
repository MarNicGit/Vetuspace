import { Desktop } from "./elements/desktop";
import { VetuOSWindowElement } from "./elements/window";
import { spawnWindowEvent } from "./events";

export class StateController {
    desktop: Desktop;

    constructor() {
        document.addEventListener('DOMContentLoaded', (event) => {
            console.log('ready');
            this.desktop = document.getElementById(Desktop.name) as Desktop;
          })
        this.registerListeners();
    }

    private registerListeners(){
        document.addEventListener(spawnWindowEvent.type, (w: CustomEvent)=>{
            this.spawnWindow(w.detail);
        })
    }

    public spawnWindow(window: VetuOSWindowElement){
        this.desktop.appendChild(window);
    }
}