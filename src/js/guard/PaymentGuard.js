
import AuthService from "../services/AuthService"

export default class PaymentGuard{
    constructor(params) {
        this._authService = new AuthService();
    }
    canActivate(){
        return !!this._authService.token;
    }
}