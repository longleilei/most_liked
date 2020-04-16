import './style.scss'
import RoutingService from "../core/RoutingService"; 
import routes from "../router/routes.config"

export default class NavbarComponent{
    constructor(){
        this.routing = new RoutingService(); 
        this.routes = routes;
    }

    render(){
        return /* html */`<nav class="navbar navbar-expand-md navbar-light bg-light" id="mainMenu">
                            <ul class="navbar-nav mr-auto">
                              ${this.generateMenuItems()}
                            </ul>
                          </nav>`
      }

    afterRender(){  
      const mainMenu = document.getElementById("mainMenu");
      mainMenu.addEventListener("click", (e)=>this.menuAction(e));
    }

    menuAction(e){
      let url = e.target.dataset["url"];
      if(url === "logout") localStorage.setItem("token", '')
      url && this.routing.navigate(url);
    }

    generateMenuItems(){
      let menuItems='';
      for(let key in this.routes){
        let route = this.routes[key];

        if (route.guard){
          if(route.revertGuard){
            if(!route.guard.canActivate()){
              menuItems+=this.generateItem(key, route.name)
            }else{
              menuItems+=''
            }
          }else if(route.guard.canActivate()){
            menuItems += this.generateItem(key, route.name)
          }else{
            menuItems+=''
          }
        }else{
          menuItems += this.generateItem(key, route.name)
        } 
      }
      return menuItems;
    }

    generateItem(url, name){
      return /* html */ `<li class="nav-item active">
                          <button class="nav-link current" data-url="${url}">${name}</button>
                        </li>`
    }
}