import { HttpService } from './../core/HttpService';
import { ENV } from './../config/env';

export default class AuthService{
    constructor(){
        this.http = new HttpService();
        
    }
    setUserData(token, user_id){
        localStorage.setItem("token", token); 
        localStorage.setItem("user_id", user_id); 
    }
    
    get token(){
      return localStorage.getItem("token"); 
    }

    login(user){
        return new Promise((resolve, reject) => {
            this.http.post(`${ENV.apiUrl}/public/auth/login`, user).then((response)=>{
                resolve(response);
            }).catch((error)=>{
                
            })
        });
    }
    autorization(user){
        return new Promise((resolve, reject) => {
            this.http.post(`${ENV.apiUrl}/public/auth/signup`, user).then((response)=>{
                resolve(response);
            }).catch((error)=>{
                
            })
        });
    }


}