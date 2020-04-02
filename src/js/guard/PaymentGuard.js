
import PaymentService from "../services/PaymentService"

export default class PaymentGuard{
    constructor(params) {
        this._paymentService = new PaymentService();
      
    }
    canActivate(){
        return !!this._paymentService.getPayment();
    }
    get redirectPage(){
        return 'payment'
    }
}
