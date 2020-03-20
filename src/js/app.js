
import PageNotFound from './pages/PageNotFound/index.js';
import RouterParse from './core/RouterParse';
import NavbarComponent from './navbar/index.js';

import routes from './router/routes.config';

let urlParse = new RouterParse(); 





const router = async ()=>{
    let container = document.querySelector('app-content');
    let header = document.querySelector('app-header');

    let parsedRoute = urlParse.parseRequestedURL();
    let url = parsedRoute.route ?  parsedRoute.route + (parsedRoute.id ? "/:id":""):"/"; 

    let page = routes[url].component;

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

    let navBar = new NavbarComponent();
    header.innerHTML = navBar.render();

}


window.addEventListener("load", router);
window.addEventListener("hashchange", router); 
