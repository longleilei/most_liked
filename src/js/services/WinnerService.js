import { HttpService } from './../core/HttpService';
import { ENV } from './../config/env'; 

export default class NewsService{
  constructor(){
      this.http = new HttpService();
  }


getWinners(part,limit){
    return new Promise((resolve,reject) => {
        this.http.get(`${ENV.apiUrl}/public/winners?part=${part}&limit=${limit}`)
        .then((response) => {
            resolve(response.winners); 
        }).catch((error)=> reject(error)); 

        }); 
    
      } 
  }