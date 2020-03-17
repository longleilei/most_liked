import { HttpService } from './../core/HttpService';
import { ENV } from './../config/env'; 

export default class NewsService{
  constructor(){
      this.http = new HttpService();
  }
  getUser(id){
      return new Promise((resolve,reject) => {
          this.http.get(`${ENV.apiUrl}/api/public/news${id}`)
          .then((response) => {
              resolve(response); 
          }).catch((error)=> reject(error)); 

          }); 
      
        } 

    }