
import './style.scss'; 
import WinnerService from "../../services/WinnerService"; 
export default class WinnerPage{
    constructor(){
      this.WinnerService = new WinnerService(); 
    }

    async beforeRender(){
      let part = 1; 
      let limit = 10; 
      this._pics = await this.WinnerService.getWinners(part,limit); 
    }
    render(){
        return /*html*/ `<div class='wrapper'>
        ${this.generatePics()} </div>`
    }
    afterRender(){
    }

    
    generatePics(){
        let allPicsTempl= '';
        this._pics.forEach(pic => {
            allPicsTempl += this.generatePicsTemplate(pic)
        });
        return allPicsTempl;
    }
    generatePicsTemplate(pic){
        return /*html*/ `<div class='container'>
          <div class='main-pic'>
            <img src="pic/Inspiring.png" alt='background'></img>
          </div>
          <div class='main'>
            <div class='most-liked-pic'>
              <img src='${pic.member_id.images[0].image_basic.url}'></img>
              <div class='heart'><i class="far fa-heart"></i></div>
              <div class='view'><i class="fas fa-eye"></i></div>
            </div>
          </div>`
    }
}