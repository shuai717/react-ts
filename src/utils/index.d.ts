declare type routesMenu={
    key:string,
    label:string
    [propName:string]:any
}
declare type routes={
    key:string,
    path:string,
    exact:boolean,
    name:string,
    component:React.LazyExoticComponent
    [propName:string]:any
} 