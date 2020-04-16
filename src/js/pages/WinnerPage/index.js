
import './style.scss'; 
import WinnerService from "../../services/WinnerService"; 
export default class WinnerPage{
    constructor(){
      this.WinnerService = new WinnerService(); 
    }

    async beforeRender(){
      this.part = 1; 
      this.limit = 2; 
      let response = await this.WinnerService.getWinners(this.part, this.limit); 
      this._pics = response.winners;
      this.total = response.counts;
    }
    render(){
        return /*html*/ `<div class='container' id='container'>
          <div class='main-pic'></div>
          <div class='main' id='main'>${this.generatePics(this._pics)}
            <div class="spinner-grow text-success" id="preloader" role="status">
            </div>
          </div>
         
        </div>`
    }
    afterRender(){
      this.preloader = document.getElementById('preloader');
     
      this.main = document.getElementById('main'); 
      this.handler = () => this.scrollListener();
     
      window.addEventListener('scroll', this.handler);
  }

    scrollListener(){
      let cardImgs = this.main.getElementsByClassName('card-img'); 
      if ( window.scrollY >= (this.main.offsetHeight-cardImgs[cardImgs.length-1].offsetHeight)) {
        if(this._pics.length === this.total){
          return;
        }
        if(!this.inProgress){ 
          this.part++;
          this.preloader.classList.add("visible")
          this.getNewImages();
      }   
       // main.innerHTML += `${this.generatePics()}`;        
      } 
    }

    async getNewImages(){
      this.inProgress = true;
      let response = await this.WinnerService.getWinners(this.part, this.limit);
      let newImgs = response.winners;
      this.total = response.counts;
      this.preloader.classList.remove("visible");
      this.main.insertAdjacentHTML("beforeend", this.generatePics(newImgs));
      this._pics.push(...newImgs);
      if(this._pics.length === this.total){
        alert('no more winners');
        return;
      }
      this.inProgress = false;
    }

    generatePics(pics){
        let allPicsTempl= '';
        pics.forEach(pic => {
            allPicsTempl += this.generatePicsTemplate(pic)
        });
        return allPicsTempl;
    }

    generatePicsTemplate(pic){
        return /*html*/ `<div class="card-img">
                            <img src='${pic.member_id.images[0].image_basic.url}'/>
                            <div class='overlay'>
                                <a href="#" class="icon" title="heart">
                                <i class="far fa-heart fa-2x"></i>${pic.member_id.total_votes}</a>
                            </div>
                        </div>`
    }

    destroy(){
      window.removeEventListener('scroll', this.handler);
    }

  }
