import './style.scss'

export default class PaymentPage{
    constructor(){
    
    }
    render(){
        return /* html */ `<div class="login-form-wrapper">
            <form name = "login-form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="Password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>`
    }
    afterRender(){
       let form = document.forms["login-form"];
       form.addEventListener('submit', (e)=>{
        e.preventDefault();
            let userObj = {
                email: form.elements['Email'].value,
                password:form.elements['Password'].value
            }
            if (!userObj.email || !userObj.password) return;

            this.auth.login(userObj).then((response)=>{
                if (response['error'] == true){
                    if(response.message){
                        alert(response.message);
                      }
                    //this.routing.navigate('autorization');                 
                } else{
                    this.auth.setUserData(response.token, response.id);
                    this.routing.navigate(`user/${response.id}`);
                    //this.routing.navigate(`user/${response.token}`); 
                    //location.navigation(`user/${response.id}`); 
                }
                
            })
       })
    }
}