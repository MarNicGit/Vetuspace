export class DesktopIcon extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        console.log('element added!');
        this.render();
    }

    render(){
        let title = this.getAttribute('title');
        let iconUrl = this.getAttribute('icon');

        let icon = document.createElement('img' )
        icon.src = iconUrl;

        let label = document.createElement('label');
        label.innerText = title;

        this.innerHTML = icon.outerHTML + label.outerHTML;
    }
}