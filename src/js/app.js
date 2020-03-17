import HomePage from './pages/HomePage/index.js';
import PageNotFound from './pages/PageNotFound/index.js';
import LoginPage from './pages/LoginPage/index.js';
import Autorization from './pages/Autorization/index.js';
import RouterParse from './core/RouterParse';
import UserPage from './pages/UserPage/index.js';

let urlParse = new RouterParse(); 

 const routes ={
    '/': new HomePage("Home"),
    'login' : new LoginPage(), 
    'autorization': new Autorization(),
    'user/:id': new UserPage()
}

const router = async ()=>{
    let container = document.querySelector('app-content');
    let parsedRoute = urlParse.parseRequestedURL();
    let url = parsedRoute.route ?  parsedRoute.route + (parsedRoute.id ? "/:id":""):"/"; 

    let page = routes[url];

    if (!page){
        container.innerHTML = new PageNotFound().render();
        return;
    }
    if(page.beforeRender){
        await page.beforeRender();  
        container.innerHTML = page.render();
        page.afterRender && page.afterRender();
 

    }else{ 
        container.innerHTML = page.render(); 
        page.afterRender && page.afterRender(); 
    }
}


window.addEventListener("load", router);
window.addEventListener("hashchange", router); 
