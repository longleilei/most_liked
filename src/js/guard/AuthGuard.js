
import AuthService from "../services/AuthService"

export default class AuthGuard{
    constructor(params) {
        this._authService = new AuthService();
    }
    canActivate(){
        return !!this._authService.token;
    }
    get redirectPage(){
        return 'login'
    }
}