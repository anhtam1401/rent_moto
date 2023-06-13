import config from '~/config';
import MotoDetail from '~/pages/MotoDetail';
import Home from '~/pages/Home/Home';
import Login from '~/pages/Login/Login';
import Register from '~/pages/Register/Register';
import HomeAdmin from '~/pages/Admin/HomeAdmin';
import Profile from '~/pages/Profile/Profile';
import AdminLayout from '~/layouts/AdminLayout';
import Account from '~/pages/Admin/Account';
import User from '~/pages/Admin/User';
import Cart from '~/pages/Cart';
import ManagerMoto from '~/pages/Admin/ManagerMoto';
import AcceptMoto from '~/pages/Admin/AcceptMoto';
import AcceptReturnMoto from '~/pages/Admin/AcceptReturnMoto';
import Add from '~/pages/Admin/ManagerMoto/Action';
import Action from '~/pages/Admin/AcceptReturnMoto/Action';
import History from '~/pages/History';

// public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.history, component: History },
    { path: config.routes.moto, component: MotoDetail },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.admin, component: HomeAdmin, layout: AdminLayout },
    { path: config.routes.profile, component: Profile },
    {
        path: config.routes.managerAccount,
        component: Account,
        layout: AdminLayout,
    },
    {
        path: config.routes.updateProfile,
        component: User,
        layout: AdminLayout,
    },
    {
        path: config.routes.updateInfoMoto,
        component: ManagerMoto,
        layout: AdminLayout,
    },
    {
        path: config.routes.addUpdateInfoMoto,
        component: Add,
        layout: AdminLayout,
    },
    {
        path: config.routes.acceptRentMoto,
        component: AcceptMoto,
        layout: AdminLayout,
    },
    {
        path: config.routes.acceptReturnMoto,
        component: AcceptReturnMoto,
        layout: AdminLayout,
    },
    {
        path: config.routes.addAcceptReturnMoto,
        component: Action,
        layout: AdminLayout,
    },
];

export { publicRoutes };
