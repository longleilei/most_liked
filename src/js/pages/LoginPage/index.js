import './style.scss'
import AuthService from '../../services/AuthService.js'
export default class Homepage{
  constructor(){
    this.auth = new AuthService(); 
  }
  render(){
    return /* html*/<div class="home">
      <button id='loginBtn'>Login</button>
    </div>
  }
  afterRender(){
    let form = document.forms['login-form']; 
    form.addEventListener('submit',()=>{
      let userObj = {
        email: form.elements['Email'],
        password: form.elements['Password']
      }
      if(!userObj,email || !userObj.password) return; 
      
      this.auth(userObj).then(() => {

      })
    }); 

  }
}