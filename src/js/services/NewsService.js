import { HttpService } from './../core/HttpService';
import { ENV } from './../config/env'; 

export default class NewsService{
  constructor(){
      this.http = new HttpService();
  }
 
  getNews(token){
      return new Promise((resolve,reject) => {
          this.http.get(`${ENV.apiUrl}/api/public/news${token}`)
          .then((response) => {
              resolve(response); 
          }).catch((error)=> reject(error)); 

          }); 
      
        } 

    }