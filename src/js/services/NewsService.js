import { HttpService } from './../core/HttpService';
import { ENV } from './../config/env'; 

export default class NewsService{
  constructor(){
      this.http = new HttpService();
  }
 
  getNews(token){
      return new Promise((resolve,reject) => {
          this.http.getWithToken(`${ENV.apiUrl}/public/news`, token)
          .then((response) => {
              resolve(response.news); 
          }).catch((error)=> reject(error)); 

          }); 
      
        } 

    }