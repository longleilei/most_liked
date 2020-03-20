import './style.scss'; 
import NewsService from "../../services/NewsService"; 
export default class UserPage{
    constructor(){
    }

    async beforeRender(){
        let token = localStorage.getItem("user_token"); 
        this._news = await this.NewsService.getNews(token); 
    }
    render(newspiece){

        return /*html*/ 
        `div class="card-wrapper">
        <div class="card-container">
          <div class="left">
            <div class="circle"><img src="${news.avatar}" alt=""></img></div>
            <div class="name">${news.name}</div>
            <div class="country">${news.country}</div> 
            <div class="status">${news.status}</div>
            <div class="date">${news.date}</div>
            <button>Follow</button>
          </div>
          <div class="right"><img src ="${news.img}" alt=""></div>
        </div>
    </div>`
    
    }
    afterRender(){
        let allNews = ''; 
        news.forEach(element => {
            this.allNews += this.render(element)});

        //this.container.insertAdjacentHTML("beforeend", this.allNews); 

        //container is the div to place all cards with articles 
        //this.container = document.querySelector('.news-wrap .row')
        

    }
}