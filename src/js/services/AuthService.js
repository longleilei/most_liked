export default class  AuthService{
  constructor(){
    this.http = new HttpService(); 
  }
  login(user){
    return new Promise((resolve, reject) => {
      this.http.post(`${ENV.api}/public/auth/login`,user).then((resolve)=>{
        resolve(response); 
      })
    }); 
  }
}