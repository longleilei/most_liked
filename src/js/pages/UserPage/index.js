
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
            <div class='background'>
            <img src = "${this._user.cover}" width="100%" height="400px"></div>
            <div class='main'>
                <div class='user-panel'>
                    <div class='circle-wrapper'>
                        <div class='circle-pic'></div>
                    </div> 
                    <div class='section-wrapper'>

                    <div class='section name'>
                        <div class='num'>Sukhovii Anastasia</div>
                    </div>
                    <div class='section points'>
                        <div class='num'>0</div>
                        <div class='title'>Points</div>
                    </div>
                    <div class='section glories'>
                        <div class='num'>0</div>
                        <div class='title'>My Glories</div>
                    </div>
                    <div class='section favorites'>
                        <div class='num'>0</div>
                        <div class='title'>My Favorites</div>
                    </div>
                    <div class='section followers'>
                        <div class='num'>0</div>
                        <div class='title'>My Followers</div>
                    </div>
                    <div class='section following'>
                        <div class='num'>0</div>
                        <div class='title'>Followings</div>
                    </div>
                    </div>
                </div>
                <div class='upload-pic'>
                    <div class='pic-wrapper'></div>
                </div>
            </div>
        </div>`
    
    }
    afterRender(){
        /*let btn = document.getElementById('newsBtn');
        btn.addEventListener('click', ()=>{
            this.routing.navigate(`news`);
        })

        let btn2 = document.getElementById('winnerBtn');
        btn2.addEventListener('click', ()=>{
            this.routing.navigate(`winners`);
        }) */ 
    }

}