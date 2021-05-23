import { Desktop } from "./elements/desktop";
import { VetuOSWindowElement } from "./elements/window";
import { spawnWindowEvent } from "./events";

export class StateController {
    constructor() {
        this.registerListeners();
    }

    private static _controllerInstance: StateController;
    public static get instance() {
        if (!this._controllerInstance) {
            this._controllerInstance = new StateController();
        }

        return this._controllerInstance;
    }

    private _desktopElement : HTMLElement;
    private get desktop(){
        if(!this._desktopElement){
            this._desktopElement = document.getElementById(Desktop.name) as Desktop;
        }

        return this._desktopElement;
    }

    private registerListeners() {
        // document.addEventListener(spawnWindowEvent.type, (w: CustomEvent) => {
        //     this.spawnWindow(w.detail);
        // })
    }

    public spawnWindow(window: VetuOSWindowElement) {
        this.desktop.appendChild(window);
    }
}