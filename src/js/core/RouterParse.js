export default class RouterParse{
  parseRequestedURL(){
    let url = location.hash.slice(1).toLocaleLowerCase() || "/"; 
    let params = url.split("/"); 
    return{
      route: params[0], 
      id: params[1]
    }
  }
}