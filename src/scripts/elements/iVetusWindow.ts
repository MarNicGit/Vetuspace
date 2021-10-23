import { VetusWindow } from "./vetusWindow";

export interface IVetusWindow {
    window : VetusWindow;
    windowTitle: string;

    getElement():Node;
    registerListeners():void;
}