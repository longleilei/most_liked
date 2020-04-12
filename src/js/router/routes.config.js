import LoginPage from '../pages/LoginPage/index.js';
import HomePage from '../pages/HomePage/index.js';
import Autorization from '../pages/Autorization/index.js';
import UserPage from '../pages/UserPage/index.js';
import NewsPage from '../pages/NewsPage/index.js';
import WinnerPage from '../pages/WinnerPage/index.js';
import AuthGuard from '../guard/AuthGuard';
import PaymentPage from '../pages/PaymentPage/index.js';
import PaymentGuard from '../guard/PaymentGuard.js';
const authGuard = new AuthGuard();
const paymentGuard = new PaymentGuard();

const routes = {
    '/': {
        component: new HomePage("Home"),
        name: "Home"
    },
    'login': {
        component: new LoginPage(),
        name: "Login",
        guard: authGuard,
        revertGuard: true
    },
    'autorization': {
        component: new Autorization(),
        name: "Registration",
        guard: authGuard,
        revertGuard: true
    },
    'user/:id': {
        component: new UserPage(),
        name: "Profile",
        guard: authGuard
    },
    'news': {
        component: new NewsPage("News"),
        name: "News",
        guard: authGuard
    },
    'winners': {
        component: new WinnerPage("Winners"),
        name: 'Winners',
        guard: authGuard,
    },
    'logout': {
        component: new LoginPage(),
        name: 'Logout',
        guard: authGuard
    }, 
    'payment': {
        component: new PaymentPage(),
        name: 'Payment',
        guard: paymentGuard
    }
}
export default routes;