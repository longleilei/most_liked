import './style.scss'

export default class PaymentPage{
    constructor(){
    
    }
    render(){
        return /* html */ `<div class="login-form-wrapper">
           Payment
        </div>`
    }
    afterRender(){
       let form = document.forms["login-form"];
      /*  form.addEventListener('submit', (e)=>{
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
       }) */
    }
}