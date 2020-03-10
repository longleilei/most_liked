import HomePage from './pages/HomePage/index.js';
import PageNotFound from './pages/PageNotFound/index.js';
import LoginPage from './pages/LoginPage/index.js';


 const routes ={
    '/': new HomePage("Home"),
    'login' : new LoginPage()
}

const router = ()=>{
    let container = document.querySelector('app-content');
    let url = location.hash.slice(1).toLocaleLowerCase() || "/";
    if (!routes[url]){
        container.innerHTML = new PageNotFound().render();
        return;
    }
    container.innerHTML = routes[url].render();
    routes[url].afterRender && routes[url].afterRender();
} 

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
