export class DesktopIcon extends HTMLElement {
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
    }

    onClick(e: MouseEvent){
        e.stopPropagation();
        this.select()
    }

    onDoubleClick(e: MouseEvent){
        console.log(e);
        this.unselect();
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
        iconWrapper.innerHTML = icon.outerHTML;

        let label = document.createElement('label');
        label.innerText = title;

        this.innerHTML = iconWrapper.outerHTML + label.outerHTML;
    }
}