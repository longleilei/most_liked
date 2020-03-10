import { HttpService } from './../core/HttpService';
import { ENV } from './../config/env';

export default class AuthService{
    constructor(){
        this.http = new HttpService();
    }
    login(user){
        return new Promise((resolve, reject) => {
            this.http.post(`${ENV.apiUrl}/public/auth/login`, user).then((response)=>{
                resolve(response);
            }).catch((error)=>{
                
            })
        });
    }


}