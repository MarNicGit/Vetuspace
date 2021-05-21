//This file loads all of our custom elements

import { BrowserAddressbar } from "./elements/browser/addressbar";
import { BrowserBody } from "./elements/browser/body";
import { Browser } from "./elements/browser/browser";
import { Desktop } from "./elements/desktop";
import { DesktopIcon } from "./elements/desktopIcon";

export class ElementLoader {
    constructor() {
        customElements.define('desktop-base', Desktop);
        customElements.define('desktop-icon', DesktopIcon);
        customElements.define(Browser.elementName, Browser);
        customElements.define(BrowserAddressbar.elementName, BrowserAddressbar);
        customElements.define(BrowserBody.elementName, BrowserBody);
    }
}

