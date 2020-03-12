import { HttpService } from '../core/HttpService';
import { ENV } from '../config/env';

export default class UserService{
    constructor(){
        this.http = new HttpService();
    }
    getUser(id){
        return new Promise((resolve, reject) => {
            this.http.get(`${ENV.apiUrl}/public/users/get-info/${id}`).then((response)=>{
                resolve(response);
            }).catch((error)=>{
                
            })
        });
    }


}