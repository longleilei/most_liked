import LoginPage from '../pages/LoginPage/index.js';
import HomePage from '../pages/HomePage/index.js';
import Autorization from '../pages/Autorization/index.js';
import UserPage from '../pages/UserPage/index.js';
import NewsPage from '../pages/NewsPage/index.js';
import WinnerPage from '../pages/WinnerPage/index.js';

const routes = {
    '/': {
        component: new HomePage("Home"),
        name: "home"
    },
    'login': {
        component: new LoginPage(),
        name: "login"
    },
    'autorization': {
        component: new Autorization(),
        name: "registration"
    },
    'user/:id': {
        component: new UserPage(),
        name: "profile"
    },
    'news': {
        component: new NewsPage("News"),
        name: "News"
    },
    'winners': {
        component: new WinnerPage("Winners"),
        name: 'Winners'
    }
}
export default routes;