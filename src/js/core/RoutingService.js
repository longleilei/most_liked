
export default class RoutingService{
  navigate(url){
      location.hash = url;
  }
  getCurrentUrl(){
    let url = location.hash.slice(1).toLocaleLowerCase() || "/";
    let params = url.split("/"); 
    return params[0]
  }
}