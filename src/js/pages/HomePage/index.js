import './style.scss'
import RoutingService from "../../core/RoutingService"; 

export default class Homepage{
    constructor(name){
        this.name = name;
        this.routing = new RoutingService(); 
    }
    render(){
        return /* html */ `<div class="home">
            <button id="loginBtn">Login</button>
            <button id="regBtn">Registration</button>
        </div>`
    }
    afterRender(){
        let btn = document.getElementById('loginBtn');
        btn.addEventListener('click', ()=>{
            this.routing.navigate(`login`);
        })
        let regbtn = document.getElementById('regBtn');
        regbtn.addEventListener('click', ()=>{
            this.routing.navigate(`autorization`);
        })
    }
}