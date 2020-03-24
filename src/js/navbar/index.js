import './style.scss'
import RoutingService from "../core/RoutingService"; 

export default class Homepage{
    constructor(){
        this.routing = new RoutingService(); 
    }

    render(){
        return /* html */`<nav class="navbar navbar-expand-md navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#login">Home </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#news">News</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#winners">Winners</a>
            </li>
        </ul>
        </nav>`}

    afterRender(){   
    }
}