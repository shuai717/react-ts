import {lazy} from 'react'
const Login =lazy(()=>import('../pages/layout/login/index'))
const routes=[
    {
        key:'login',
        component:Login,
        path:'/login',
        exact:true,
        name:'登录'
    },
    {
        path:'/',
        component:Login,
    }
]
export default routes