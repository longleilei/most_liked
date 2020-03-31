
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
        return /*html*/ `<div class='container'>
        <div class='main-pic'></div>
        <div class='main'>${this.generatePics()}</div>`
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
        return /*html*/ `<img src='${pic.member_id.images[0].image_basic.url}'/>
        <div class='overlay'>
            <a href="#" class="icon" title="heart">
            <i class="far fa-heart fa-5x"></i>${pic.member_id.total_votes}</a>
        </div>`
    }
}