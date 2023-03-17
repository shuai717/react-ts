import {lazy} from 'react'
const Login =lazy(()=>import('../pages/login/index'))
const Home =lazy(()=>import('../pages/home/index'))
const BaseLayout =lazy(()=>import('../pages/layout/index'))
const routes=[
    {
        key:'login',
        component:Login,
        path:'/login',
        exact:true,
        name:'登录'
    },
    {
        key:'layout',
        component:BaseLayout,
        path:'/',
        name:'layout',
        exact:true,
        chriden:[
            {
                key:'home',
                component:Home,
                path:'/home',
                exact:true,
                name:'首页'
            }
        ]
    }
]
export default routes