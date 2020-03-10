import './style.scss'
export default class Homepage{
    constructor(name){
        this.name = name;
    }
    render(){
        return /* html */ `<div class="home">
            <button id="loginBtn">Login</button>
        </div>`
    }
    afterRender(){
        let btn = document.getElementById('loginBtn');
        btn.addEventListener('click', ()=>{
            location.hash = 'login';
        })
    }
}