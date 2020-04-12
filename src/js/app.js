import Router from './router/Router.js'; 

let router = new Router(); 

window.addEventListener("load", () => {router.route()});
window.addEventListener("hashchange", () => {router.route()}); 
