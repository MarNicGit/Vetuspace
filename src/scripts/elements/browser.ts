import { IVetusWindow } from "./iVetusWindow";
import { VetusWindow } from "./vetusWindow";

export class Browser implements IVetusWindow {
    constructor() {
        this.window = new VetusWindow(this.windowTitle);
     }

    windowTitle = "Bunscape";

    window: VetusWindow;

    connectedCallback() {
        this.registerListeners();
        this.getElement();
    }

    registerListeners() { }

    getElement() : Node {
        return (this.window as Node);
    }
}
