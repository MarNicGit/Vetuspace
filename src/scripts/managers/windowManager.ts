import { Browser } from "../elements/browser";
import { IVetusWindow } from "../elements/iVetusWindow";
import { WindowContainer } from "../elements/windowContainer";
import { LogManager } from "./logManager";

//dictionary with only IVetusWindow classes
const windows: any = {
    'bunscape': Browser,
}

export class WindowManager {
    log: LogManager;
    private _container: HTMLElement = null;
    private windowContainer(): HTMLElement { return this._container ?? WindowContainer.Get(); }

    constructor() {
        this.log = new LogManager(this);
    }

    public SpawnNewWindowOfType(type: string) {
        if (!windows[type]) {
            this.log.error(`Couldn't find window of type ${type}.`)
            return;
        }

        let newWindow = new windows[type] as IVetusWindow;
        let x = newWindow.getElement();
        this.windowContainer().append(newWindow.getElement());

        // let windowContainer = WindowContainer.Get();
        // windowContainer.appendChild(newElement);
    }
}
