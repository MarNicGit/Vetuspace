//This file loads all of our custom elements

import { Browser } from "./elements/Browser";
import { Desktop } from "./elements/desktop";
import { DesktopIcon } from "./elements/desktopIcon";

export class ElementLoader {
    constructor() {
        customElements.define('desktop-base', Desktop);
        customElements.define('desktop-icon', DesktopIcon);
        customElements.define('bunscape-browser', Browser);
    }
}

