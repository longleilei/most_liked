import PageNotFound from '../pages/PageNotFound/index.js';
import RouterParse from '../core/RouterParse';
import NavbarComponent from '../navbar/index.js';
import RoutingService from "../core/RoutingService"; 
import routes from '../router/routes.config';
import Spinner from '../pages/PreloaderComponent/index.js';


export default class Router{

  constructor(){
    this.urlParse = new RouterParse(); 
    this.routing = new RoutingService();
  }
  

  async route() {
    let container = document.querySelector('app-content');
    let header = document.querySelector('app-header');

    let parsedRoute = this.urlParse.parseRequestedURL();
    let url = parsedRoute.route ?  parsedRoute.route + (parsedRoute.id ? "/:id":""):"/"; 

    if (!routes[url]){
        container.innerHTML = new PageNotFound().render();
        return;
    }

    let page = routes[url].component;
    let guard = routes[url].guard;
    let revertGuard = routes[url].revertGuard;
    if(guard && revertGuard){
        this.renderPage(page, container, header)
        return;
    }

    if (guard){
        if(guard.canActivate()){
            this.renderPage(page, container, header);
            return;
        }else{
            this.routing.navigate(guard.redirectPage);
        }
      
    } else{
        this.renderPage(page, container, header);
        return;
    }
   
}
  async renderPage(page, container, header){
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

}