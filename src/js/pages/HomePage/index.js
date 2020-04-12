import './style.scss'
import RoutingService from "../../core/RoutingService"; 

export default class Homepage{
    constructor(name){
        this.name = name;
        this.routing = new RoutingService(); 
    }
    render(){
        return /* html */ `<div class='container-home'>
        <div class='main-home'>
          <div id="overlay"></div>
          <div class='welcome'>
            <div class='txt'>Welcome to Most Liked!</div>
            <div class='main-btns'>
              <button id="loginBtn">Login</button>
              <button id="regBtn">Registration</button>
            </div>
          </div>
        </div>
      </div> `
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