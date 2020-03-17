import './style.scss'; 
import NewsService from "../../services/NewsService"; 
export default class UserPage{
    constructor(){
    }

    async beforeRender(){
        let token = localStorage.getItem("user_token"); 
        this._user = await this.NewsService.getNews(token); 
    }
    render(){

        return /*html*/ 
        `<div class="home"> 
        <img src = "${this._user.cover}" width="100%" height="400px"
        </div>`
    
    }
    afterRender(){
        
    }
}