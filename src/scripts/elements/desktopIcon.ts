export class DesktopIcon extends HTMLElement {
    title:string;
    action:string;
    iconUrl:string;

    constructor(){
        super();
    }

    connectedCallback(){
        this.title = this.getAttribute('title');
        this.action = this.getAttribute('action');
        this.iconUrl = this.getAttribute('icon');

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
        let icon = document.createElement('img' )
        icon.src = this.iconUrl;

        let iconWrapper = document.createElement('div');
        iconWrapper.className = "wrapper";
        iconWrapper.innerHTML = icon.outerHTML;

        let label = document.createElement('label');
        label.innerText = this.title;

        this.innerHTML = iconWrapper.outerHTML + label.outerHTML;
    }
}