
import PageNotFound from './pages/PageNotFound/index.js';
import RouterParse from './core/RouterParse';
import NavbarComponent from './navbar/index.js';
import RoutingService from "./core/RoutingService"; 
import routes from './router/routes.config';
import Spinner from './pages/PreloaderComponent/index.js';


let urlParse = new RouterParse(); 
const routing = new RoutingService();




const router = async ()=>{
    let container = document.querySelector('app-content');
    let header = document.querySelector('app-header');

    let parsedRoute = urlParse.parseRequestedURL();
    let url = parsedRoute.route ?  parsedRoute.route + (parsedRoute.id ? "/:id":""):"/"; 

    if (!routes[url]){
        container.innerHTML = new PageNotFound().render();
        return;
    }

    let page = routes[url].component;
    let guard = routes[url].guard;
    let revertGuard = routes[url].revertGuard;
    if(guard && revertGuard){
        renderPage(page, container, header)
        return;
    }

    if (guard){
        if(guard.canActivate()){
            renderPage(page, container, header);
            return;
        }else{
            routing.navigate(guard.redirectPage);
        }
      
    } else{
        renderPage(page, container, header);
        return;
    }
   
}
async function renderPage(page, container, header){
    if(page.beforeRender){
        container.innerHTML = new Spinner().render();
        await page.beforeRender();  
        container.innerHTML = page.render();
        page.afterRender && page.afterRender();
 

    }else{ 
        container.innerHTML = page.render(); 
        page.afterRender && page.afterRender(); 
    }

    let navBar = new NavbarComponent();
    header.innerHTML = navBar.render();
    navBar.afterRender();
}

window.addEventListener("load", router);
window.addEventListener("hashchange", router); 
