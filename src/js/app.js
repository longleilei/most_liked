import HomePage from './pages/index.js'; 
import PageNotFound from './pages/index.js'; 
import LoginPage from './pages/index.js'; 

const routes = {
  '/': new HomePage("Home"),
  'login': newLoginPage()
}

const router = () => {
  let container = document.querySelector('app-content'); 
  let url = location.hash.slice(1).toLowerCase() || "/"; 

  if(!routes["url"]){
    container.innerHTML = new PageNotFound().render(); 
    return; 
  }
  container.innerHTML = routes["url"].render();
  
}

window.addEventListener("load",roater); 
window.addEventListener("hashchange",router); 