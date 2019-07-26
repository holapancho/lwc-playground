import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    handleOnScroll(e){
        let scrollLeft = this.template.querySelector('tbody').scrollLeft;
        this.template.querySelector('thead').style.left = -scrollLeft+'px';
        this.template.querySelector('thead tr th:first-child').style.left = scrollLeft+'px';
        let myNodelist = this.template.querySelectorAll('tbody tr td:first-child');
        window.console.log(myNodelist);
        for (let i = 0; i < myNodelist.length; i++) {
            myNodelist[i].style.left = scrollLeft+'px';
        }
    }

}
