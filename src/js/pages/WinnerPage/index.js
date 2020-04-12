
import './style.scss'; 
import WinnerService from "../../services/WinnerService"; 
export default class WinnerPage{
    constructor(){
      this.WinnerService = new WinnerService(); 
    }

    async beforeRender(){
      let part = 1; 
      let limit = 2; 
      this._pics = await this.WinnerService.getWinners(part,limit); 
    }
    render(){
        return /*html*/ `<div class='container' id='container'>
        <div class='main-pic'></div>
        <div class='main' id='main'>${this.generatePics()}</div>`
    }
    afterRender(){
      let cardImg = document.getElementById('card-img'); 
      let main = document.getElementById('main'); 
      let cardImgHeight = cardImg.offsetHeight; 
      window.addEventListener('scroll', () => {
        if (cardImgHeight >= window.scrollY) {
          main.innerHTML += `${this.generatePics()}`;        
      } 
    });
  }
  
    generatePics(){
        let allPicsTempl= '';
        this._pics.forEach(pic => {
            allPicsTempl += this.generatePicsTemplate(pic)
        });
        return allPicsTempl;
    }
    generatePicsTemplate(pic){
        return /*html*/ `<div class="card-img" id="card-img">
                            <img src='${pic.member_id.images[0].image_basic.url}'/>
                            <div class='overlay'>
                                <a href="#" class="icon" title="heart">
                                <i class="far fa-heart fa-2x"></i>${pic.member_id.total_votes}</a>
                            </div>
                        </div>`
    }

  }
