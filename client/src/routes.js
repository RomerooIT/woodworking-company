import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Group from './pages/Group'
import Account from './pages/Account'
import Timetable from './pages/Timetable'
import Materials from './pages/Workmaterials'
import Error from './pages/ERROR'
import Request from './pages/Requests'
import SupportUser from './pages/SupportUser'
import AdminSupport from './pages/AdminSupport'
import NonameTovari from './pages/TovariNoname'
import TovariUsers from './pages/TovariUsers'

import {ADMIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE,ACCOUNT_ROUTE, GROUP_ROUTE,TABLE_ROUTE,MATERIALS_ROUTE, ERROR_ROUTE, AUTH_ROUTE, REQUEST_ROUTE,SUPPORT_ROUTE, ADMIN_SUPPORT_ROUTE,NONAME_TOVARI_ROUTE,USERS_TOVARI_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: REQUEST_ROUTE,
        Component: Request
    },
    {
        path: USERS_TOVARI_ROUTE,
        Component: TovariUsers //mistake was
    },
    {
        path: SUPPORT_ROUTE,
        Component: SupportUser
    },
    {
        path: NONAME_TOVARI_ROUTE,
        Component: NonameTovari
    }, 
    
    {
        path: ADMIN_SUPPORT_ROUTE,
        Component: AdminSupport
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    //////////////////////////////////////////////////    //////////////////////////////////////////////////    //////////////////////////////////////////////////
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: GROUP_ROUTE,
        Component: Group
    },
    {
        path: TABLE_ROUTE,
        Component: Timetable
    },
    {
        path: MATERIALS_ROUTE,
        Component: Materials
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    }

]