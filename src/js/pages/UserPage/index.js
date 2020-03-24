
import './style.scss'; 
import UserService from "../../services/UserService"; 
import RoutingService from "../../core/RoutingService"; 
export default class UserPage{
    constructor(){
       this.userService = new UserService(); 
       this.routing = new RoutingService(); 
    }

    async beforeRender(){
        let id = localStorage.getItem("user_id"); 
        this._user = await this.userService.getUser(id); 
    }
    render(){
        return /*html*/ `<div class="home"> 
            <img src = "${this._user.cover}" width="100%" height="400px">
            <button id="newsBtn">News</button>
            <button id="winnerBtn">Winners</button>
        </div>`
    
    }
    afterRender(){
        let btn = document.getElementById('newsBtn');
        btn.addEventListener('click', ()=>{
            this.routing.navigate(`news`);
        })

        let btn2 = document.getElementById('winnerBtn');
        btn2.addEventListener('click', ()=>{
            this.routing.navigate(`winners`);
        }) 
        //generateTemplate()
    }

}