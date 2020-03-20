
import './style.scss'; 
import UserService from "../../services/UserService"; 
export default class UserPage{
    constructor(){
       this.userService = new UserService(); 
    }

    async beforeRender(){
        let id = localStorage.getItem("user_id"); 
        this._user = await this.userService.getUser(id); 
    }
    render(){

        return /*html*/ 
        `<div class="home"> 
        <img src = "${this._user.cover}" width="100%" height="400px"
        </div>`
    
    }
    afterRender(){
        generateTemplate()
    }

}