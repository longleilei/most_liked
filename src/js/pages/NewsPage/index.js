import './style.scss'; 
import NewsService from "../../services/NewsService"; 
export default class UserPage{
    constructor(){
        this.NewsService = new NewsService();
    }

    async beforeRender(){
        let token = localStorage.getItem("token"); 
        this._news = await this.NewsService.getNews(token); 
    }
    
    render(){

        return /*html*/ `<div class="news-page">
            ${this.generateNews()}
        </div>`
    
    }
    afterRender(){
      /*   let allNews = ''; 
        this._news.forEach(element => {
            this.allNews += this.render(element)
        }); */

        //this.container.insertAdjacentHTML("beforeend", this.allNews); 

        //container is the div to place all cards with articles 
        //this.container = document.querySelector('.news-wrap .row')
        

    }
    generateNews(){
        let allNewsTempl= ''
        this._news.forEach(newspiece => {
            allNewsTempl += this.generateNewsTemplate(newspiece)
        });
        return allNewsTempl;
    }
    generateNewsTemplate(newspiece){
        return /*html*/ `<div class="card-wrapper">
                <div class="card-container">
                <div class="left">
                    <div class="circle"><img src="${newspiece.owner.avatar}" alt=""></img></div>
                    <div class="name">${newspiece.owner.full_name}</div>
                    <div class="country">${newspiece.owner.country}</div> 
                    <div class="date">${newspiece.date}</div>
                    <button>Follow</button>
                </div>
                <div class="right"><img src ="${newspiece.pictures["0"].url}" alt=""></div>
                </div>
            </div>`
    }
}