import {lazy} from 'react'
const Login =lazy(()=>import('../pages/layout/login/index'))
const Home =lazy(()=>import('../pages/home/index'))
const routes=[
    {
        key:'login',
        component:Login,
        path:'/login',
        exact:true,
        name:'登录'
    },
    {
        key:'home',
        component:Home,
        path:'/home',
        exact:true,
        name:'首页'
    },
]
export default routes